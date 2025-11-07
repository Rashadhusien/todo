"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignIn = () => {
  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Signup error:", error);
      return {
        success: false,
        error: {
          message: "Something went wrong. Please try again.",
        },
      };
    }
  };
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    />
  );
};

export default SignIn;
