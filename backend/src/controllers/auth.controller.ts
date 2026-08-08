import type { Request, Response } from "express";
import { z } from "zod";
import {
  loginUser,
  refreshSession,
  registerUser,
} from "../services/auth.service.js";
import {
  clearAuthCookies,
  setAuthCookies,
} from "../utils/auth-cookies.js";

const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "O nome deve ter pelo menos 3 caracteres.")
    .max(100, "O nome deve ter no máximo 100 caracteres."),
  email: z
    .string()
    .trim()
    .email("Informe um e-mail válido.")
    .max(150, "O e-mail deve ter no máximo 150 caracteres."),
  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres.")
    .max(72, "A senha deve ter no máximo 72 caracteres."),
});

const loginSchema = z.object({
  email: z.string().trim().email("Informe um e-mail válido."),
  password: z.string().min(1, "Informe sua senha."),
});

export async function register(request: Request, response: Response) {
  const data = registerSchema.safeParse(request.body);

  if (!data.success) {
    return response.status(400).json({
      message: "Dados de cadastro inválidos.",
      errors: data.error.flatten().fieldErrors,
    });
  }

  try {
    const result = await registerUser(
      data.data.name,
      data.data.email,
      data.data.password,
    );

    setAuthCookies(response, result.accessToken, result.refreshToken);

    return response.status(201).json({
      message: "Conta criada com sucesso.",
      user: result.user,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_ALREADY_REGISTERED") {
      return response.status(409).json({
        message: "Já existe uma conta cadastrada com este e-mail.",
      });
    }

    throw error;
  }
}

export async function login(request: Request, response: Response) {
  const data = loginSchema.safeParse(request.body);

  if (!data.success) {
    return response.status(400).json({
      message: "E-mail ou senha inválidos.",
    });
  }

  try {
    const result = await loginUser(data.data.email, data.data.password);

    setAuthCookies(response, result.accessToken, result.refreshToken);

    return response.status(200).json({
      message: "Login realizado com sucesso.",
      user: result.user,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_CREDENTIALS") {
      return response.status(401).json({
        message: "E-mail ou senha inválidos.",
      });
    }

    throw error;
  }
}

export async function refresh(request: Request, response: Response) {
  const refreshToken = request.cookies.bfi_refresh_token;

  if (!refreshToken) {
    return response.status(401).json({
      message: "Sua sessão expirou. Entre novamente.",
    });
  }

  try {
    const result = await refreshSession(refreshToken);

    setAuthCookies(response, result.accessToken, result.refreshToken);

    return response.status(200).json({
      user: result.user,
    });
  } catch {
    clearAuthCookies(response);

    return response.status(401).json({
      message: "Sua sessão expirou. Entre novamente.",
    });
  }
}

export function logout(_request: Request, response: Response) {
  clearAuthCookies(response);

  return response.status(204).send();
}