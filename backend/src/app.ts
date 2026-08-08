import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { env } from "./config/env.js";
import { database } from "./database/connection.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { authRouter } from "./routes/auth.routes.js";

export const app = express();

app.disable("x-powered-by");
app.use(helmet());

app.use(
    cors({
        origin: env.CORS_ORIGIN,
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    }),
);

app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());

app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        limit: 200,
        standardHeaders: "draft-8",
        legacyHeaders: false,
        message: {
        message: "Muitas requisições. Tente novamente em alguns minutos.",
        },
    }),
);

app.use(
    "/api/auth",
    rateLimit({
        windowMs: 15 * 60 * 1000,
        limit: 10,
        standardHeaders: "draft-8",
        legacyHeaders: false,
        message: {
        message: "Muitas tentativas. Aguarde alguns minutos antes de tentar novamente.",
        },
    }),
);

app.get("/api/health", async (_request, response) => {
    await database.execute("SELECT 1");

    response.status(200).json({
        message: "API e banco de dados conectados com sucesso.",
    });
});

app.use("/api/auth", authRouter);
app.use(errorHandler);