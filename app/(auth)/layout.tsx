import SocialAuthForm from "@/components/forms/SocialAuthForm";
import { ReactNode } from "react";
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen bg-background flex-center container mx-auto">
      <section className="light-border sm:rounded-[10px] border bg-card px-4 py-10  shadow-md min-w-full sm:min-w-[520px] sm:px-8">
        {children}
        <div className="border mt-5 border-zinc-100/10 relative ">
          <span className="absolute top-1/2 left-1/2 transform -translate-1/2 p-2 rounded-full bg-white text-center">
            or
          </span>
        </div>
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
