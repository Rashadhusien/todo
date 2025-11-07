"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import { ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";
import { ActionResponse } from "@/types/global";
interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T, any, any>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<ActionResponse>;
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  const router = useRouter();
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);
    console.log(result);
    if (result?.success) {
      toast.success("Success", {
        description: isSignIn
          ? "Signed in successfully"
          : "Account created successfully",
      });
      if (isSignIn) {
        router.push(ROUTES.HOME);
      } else {
        router.push(ROUTES.VERIFY_EMAIL);
      }
    } else {
      toast.error(
        `${result?.error ? result?.error : "Error"}: ${result?.statusCode}`,
        {
          description: result?.message,
        }
      );
    }
  };

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  const isSignIn = formType === "SIGN_IN";

  return (
    <section>
      <div className="flex-between flex-col gap-2">
        <div className="space-y-2.5 text-center">
          <h1 className="h2-bold ">
            {isSignIn ? "Welcome Back" : "Create your account"}
          </h1>
          <p className="paragraph-regular ">
            {isSignIn
              ? "Enter your email and password to sign in"
              : "Enter your information to create your account"}
          </p>
        </div>
      </div>
      <div className="bg-background p-1.5 mt-5 rounded-xl flex  gap-5 ">
        <Button
          className={cn("flex-1 py-5 ", {
            "bg-white text-primary hover:bg-white/80": isSignIn,
          })}
          variant={isSignIn ? "default" : "ghost"}
        >
          <Link href={ROUTES.SIGN_IN}>Sign In</Link>
        </Button>
        <Button
          className={cn("flex-1 py-5", {
            "bg-white text-primary hover:bg-white/80": !isSignIn,
          })}
          variant={isSignIn ? "ghost" : "default"}
        >
          <Link href={ROUTES.SIGN_UP}>Sign Up</Link>
        </Button>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-10 space-y-6 gap-2 grid  md:grid-cols-2"
        >
          {/* {buttonText} */}
          {Object.keys(defaultValues).map((fieldName) => (
            <FormField
              key={fieldName}
              control={form.control}
              name={fieldName as Path<T>}
              render={({ field }) => (
                <FormItem
                  className={cn("flex w-full flex-col gap-2.5 mb-4 ", {
                    "col-span-2": !fieldName.toLowerCase().includes("name"),
                  })}
                >
                  <FormLabel className="paragraph-medium ">
                    {field.name === "email"
                      ? "Email Address"
                      : field.name.charAt(0).toUpperCase() +
                        field.name.slice(1)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={field.name === "password" ? "password" : "text"}
                      {...field}
                      placeholder={`Enter your ${fieldName}`}
                      className={cn(
                        "paragraph-regular placeholder:text-white-50 border-white-50  light-border-2  no-focus min-h-12 rounded-1.5 border"
                      )}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {isSignIn && (
            <p className="text-end w-full col-span-2 m-2">
              <Link href={ROUTES.FORGET_PASSWORD} className="text-primary  ">
                Forget Password?
              </Link>
            </p>
          )}

          <Button
            disabled={form.formState.isSubmitting}
            className=" paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter cursor-pointer col-span-2"
          >
            {form.formState.isSubmitting
              ? buttonText === "Sign In"
                ? "Signing In..."
                : "Signing Up..."
              : buttonText}
          </Button>
          {isSignIn ? (
            <p className="text-center col-span-2">
              Don&apos;t have an account?{" "}
              <Link
                href={ROUTES.SIGN_UP}
                className="paragraph-semibold text-primary "
              >
                Sign Up
              </Link>
            </p>
          ) : (
            <p className="text-center col-span-2">
              Already have an account?{" "}
              <Link
                href={ROUTES.SIGN_IN}
                className="paragraph-semibold text-primary "
              >
                Sign in
              </Link>
            </p>
          )}
        </form>
      </Form>
    </section>
  );
};

export default AuthForm;
