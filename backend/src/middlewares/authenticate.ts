import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export type AuthenticatedRequest = Request & {
    userId: number;
}

export function authenticate(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const accessToken = request.cookies.bfi_access_token;

    if (!accessToken) {
        return response.status(401).json({
            message: "Você precisa entrar na sua conta.",
        });
    }

    try {
        const payload = jwt.verify(
            accessToken,
            env.JWT_ACCESS_SECRET,
        ) as jwt.JwtPayload;

        const userId = Number(payload.sub);

        if (!Number.isInteger(userId) || userId < 1) {
            throw new Error("INVALID_ACCESS_TOKEN");
        }

        (request as AuthenticatedRequest).userId = userId;

        next();
    } catch {
        return response.status(401).json({
            message: "Sua sessão expirou. Entre novamente.",
        });
    }
}