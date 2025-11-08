"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpWithCredentials } from "@/lib/actions/auth.action";
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
      onSubmit={SignUpWithCredentials}
    />
  );
};

export default SignUp;
