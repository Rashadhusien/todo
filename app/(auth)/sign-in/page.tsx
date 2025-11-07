"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (data) => {
        try {
          console.log("Sign in data:", data);
          // TODO: Replace with actual sign-in logic
          // const response = await signIn('credentials', { ...data, redirect: false });

          // Mock success response
          return {
            success: true,
            status: 200,
          };
        } catch (error) {
          console.error("Sign in error:", error);
          return {
            success: false,
            status: 500,
            error: {
              message: "Failed to sign in. Please try again.",
            },
          };
        }
      }}
    />
  );
};

export default SignIn;
