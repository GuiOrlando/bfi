import type { Response } from "express";

const isProduction = process.env.NODE_ENV === "production";

export function setAuthCookies(
    response: Response,
    accessToken: string,
    refreshToken: string,
) {
    response.cookie("bfi_access_token", accessToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "lax",
        maxAge: 15 * 60 * 1000,
        path: "/",
    });

    response.cookie("bfi_refresh_token", refreshToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/api/auth",
    });
}

export function clearAuthCookies(response: Response) {
    response.clearCookie("bfi_access_token", { path: "/" });
    response.clearCookie("bfi_refresh_token", { path: "/api/auth" });
}