const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export const api = {
  auth: {
    signIn: async (data: any) => {
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

    signUp: async (data: any) => {
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
  },
};
