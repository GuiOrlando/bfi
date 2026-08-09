import { cookies } from "next/headers";

const API_URL = 
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export type AuthenticatedUser = {
    id: number;
    name: string;
    email: string;
};

type MeResponse = {
    user: AuthenticatedUser;
};

export async function getAuthenticatedUser() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("bfi_access_token");

    if (!accessToken) {
        return null;
    }

    const response = await fetch(`${API_URL}/api/auth/me`, {
        headers: {
            Cookie: `bfi_access_token=${accessToken.value}`,
        },

        cache: "no-store",
    });

    if (!response.ok) {
        return null;
    }

    const data = (await response.json()) as MeResponse;
    return data.user;
}