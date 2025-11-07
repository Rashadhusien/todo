import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json(
      { success: false, message: "Missing token" },
      { status: 400 }
    );
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-email?token=${token}`,
    {
      method: "POST",
    }
  );

  const data = await res.json();

  if (!res.ok || !data.success) {
    return NextResponse.json(
      { success: false, message: data.message },
      { status: 400 }
    );
  }

  return NextResponse.redirect(new URL("/sign-in", request.url));
}
