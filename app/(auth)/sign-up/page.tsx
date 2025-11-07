"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
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
      onSubmit={async (data) => {
        try {
          console.log('Sign up data:', data);
          // TODO: Replace with actual sign-up logic
          // const response = await fetch('/api/auth/register', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify(data)
          // });
          // const result = await response.json();
          
          // Mock success response
          return {
            success: true,
            status: 201
          };
        } catch (error) {
          console.error('Sign up error:', error);
          return {
            success: false,
            status: 500,
            error: {
              message: 'Failed to create account. Please try again.'
            }
          };
        }
      }}
    />
  );
};

export default SignUp;
