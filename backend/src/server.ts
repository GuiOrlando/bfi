import { app } from "./app.js";
import { env } from "./config/env.js";
import { database } from "./database/connection.js";

const server = app.listen(env.PORT, () => {
    console.log(`API disponível em http://localhost:${env.PORT}`);
});

async function shutdown() {
    console.log("\nEncerrando API...");
    server.close();
    await database.end();
    process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);