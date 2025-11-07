"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/auth/register", {
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
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUp;
