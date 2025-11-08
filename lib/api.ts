const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export const api = {
  auth: {
    signInWithGoogle: async () => {
      // For OAuth flows, we typically redirect to the provider's authorization URL
      // The backend should handle the OAuth flow and redirect back to your app
      window.location.href = `${BASE_URL}/auth/google`;

      // Return a promise that never resolves to prevent any further execution
      return new Promise(() => {});
    },

    signIn: async (data: Pick<AuthCredentails, "email" | "password">) => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      return response.json();
    },

    signUp: async (data: AuthCredentails) => {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      return response.json();
    },
    resendVerificationEmail: async (data: Pick<AuthCredentails, "email">) => {
      const response = await fetch(`${BASE_URL}/auth/resend-verification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      return response.json();
    },
  },
};
