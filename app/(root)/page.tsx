import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4 bg-background">
      <Button className="text-2xl font-bold p-6">
        <Link href={ROUTES.SIGN_IN} className="text-white-50">
          Sign In
        </Link>
      </Button>
      <Button className="text-2xl font-bold p-6">
        <Link href={ROUTES.SIGN_UP}>Sign Up</Link>
      </Button>
    </div>
  );
}
