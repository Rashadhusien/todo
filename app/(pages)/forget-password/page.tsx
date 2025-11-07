"use client";

import { ForgotPasswordSchema } from "@/lib/validations";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPassword = () => {
  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (data: { email: string }) => {
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Forgot password error:", error);
      return {
        success: false,
        error: {
          message: "Something went wrong. Please try again.",
        },
      };
    }
  };

  return (
    <section className="flex-center min-h-screen w-full">
      <div className="flex flex-col space-y-4 w-full max-w-md mx-auto p-6 bg-white rounded-xl">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Forgot Password</h1>
          <p className="text-muted-foreground">
            Enter your email address and we will send you a reset link.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="bg-white p-5"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full p-5 cursor-pointer">
              Submit
            </Button>
          </form>
        </Form>

        <div className="text-center text-sm">
          Remember your password?{" "}
          <Link href={ROUTES.SIGN_IN} className="text-primary hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
