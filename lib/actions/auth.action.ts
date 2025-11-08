"use server";

import { api } from "../api";

export const SignUpWithCredentials = async (data: AuthCredentails) => {
  return await api.auth.signUp(data);
};

export const SignInWithCredentials = async (
  data: Pick<AuthCredentails, "email" | "password">
) => {
  return await api.auth.signIn(data);
};

export const ResendVerificationEmail = async (data: { email: string }) => {
  return await api.auth.resendVerificationEmail(data);
};
