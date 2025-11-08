import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";

const VerifyEmail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-100 p-4 rounded-full">
            <Mail className="w-10 h-10 text-indigo-600" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Verify Your Email
        </h2>
        <p className="text-gray-600 mb-6">
          We’ve sent a verification link to your email address. Please check
          your inbox and click the link to verify your account.
        </p>

        <div className="flex flex-col gap-3">
          <Button className="w-full text-white">
            Resend Verification Email
          </Button>

          <Link
            href={ROUTES.SIGN_IN}
            className="text-indigo-600 text-sm font-medium hover:underline"
          >
            Back to Login
          </Link>
        </div>

        <div className="mt-8 flex justify-center items-center gap-2 text-sm text-gray-500">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span>Didn’t receive an email? Check your spam folder.</span>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
