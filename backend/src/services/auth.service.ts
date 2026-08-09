import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { database } from "../database/connection.js";
import { env } from "../config/env.js";

type UserRow = RowDataPacket & {
    id: number;
    name: string;
    email: string;
    password_hash: string;
    is_active: number;
};

type PublicUser = {
    id: number;
    name: string;
    email: string;
};

type AuthResult = {
    user: PublicUser;
    accessToken: string;
    refreshToken: string;
};

function createTokens(user: PublicUser) {
    const payload = {
        sub: String(user.id),
        email: user.email,
    };

    const accessToken = jwt.sign(payload, env.JWT_ACCESS_SECRET, {
        expiresIn: "15m",
    });

    const refreshToken = jwt.sign(payload, env.JWT_REFRESH_SECRET, {
        expiresIn: "7d",
    });

    return { accessToken, refreshToken };
}

function toPublicUser(user: UserRow): PublicUser {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
    };
}

export async function registerUser(
    name: string,
    email: string,
    password: string,
): Promise<AuthResult> {
    const normalizedEmail = email.trim().toLowerCase();

    const [existingUsers] = await database.execute<UserRow[]>(
        "SELECT id FROM users WHERE email = ? LIMIT 1",
        [normalizedEmail],
    );

    if (existingUsers.length > 0) {
        throw new Error("EMAIL_ALREADY_REGISTERED");
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const [result] = await database.execute<ResultSetHeader>(
        `
          INSERT INTO users (name, email, password_hash)
          VALUES (?, ?, ?)
        `,
        [name.trim(), normalizedEmail, passwordHash],
    );

    const user: PublicUser = {
        id: result.insertId,
        name: name.trim(),
        email: normalizedEmail,
    };

    const { accessToken, refreshToken } = createTokens(user);

    return { user, accessToken, refreshToken };
}

export async function loginUser(
    email: string,
    password: string,
): Promise<AuthResult> {
    const normalizedEmail = email.trim().toLowerCase();

    const [users] = await database.execute<UserRow[]>(
        `
          SELECT id, name, email, password_hash, is_active
          FROM users
          WHERE email = ?
          LIMIT 1
        `,
        [normalizedEmail],
    );

    const user = users[0];

    if (!user || !user.is_active) {
        throw new Error("INVALID_CREDENTIALS");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
        throw new Error("INVALID_CREDENTIALS");
    }

    const publicUser = toPublicUser(user);
    const { accessToken, refreshToken } = createTokens(publicUser);

    return {
        user: publicUser,
        accessToken,
        refreshToken,
    };
}

export async function refreshSession(refreshToken: string): Promise<AuthResult> {
    let payload: jwt.JwtPayload;

    try {
      payload = jwt.verify(
          refreshToken,
          env.JWT_REFRESH_SECRET,
      ) as jwt.JwtPayload;
    } catch {
        throw new Error("INVALID_REFRESH_TOKEN");
    }

    const userId = Number(payload.sub);

    if (!Number.isInteger(userId) || userId < 1) {
        throw new Error("INVALID_REFRESH_TOKEN");
    }

    const [users] = await database.execute<UserRow[]>(
        `
          SELECT id, name, email, password_hash, is_active
          FROM users
          WHERE id = ?
          LIMIT 1
        `,
        [userId],
    );

    const user = users[0];

    if (!user || !user.is_active) {
        throw new Error("INVALID_REFRESH_TOKEN");
    }

    const publicUser = toPublicUser(user);
    const tokens = createTokens(publicUser);

    return {
        user: publicUser,
        ...tokens,
    };
}

export async function getUserById(userId: number): Promise<PublicUser> {
    const [users] = await database.execute<UserRow[]>(
        `
          SELECT id, name, email, password_hash, is_active
          FROM users
          WHERE id = ?
          LIMIT 1
        `,
        [userId]
    );

    const user = users[0];

    if (!user || !user.is_active) {
        throw new Error("USER_NOT_FOUND");
    }

    return toPublicUser(user);
}