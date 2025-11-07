import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include", // ✅ forward cookies (important if backend sets auth cookie)
    });

    const data = await res.json();

    // If your backend sets a cookie, just forward it
    const response = NextResponse.json(data);
    const setCookieHeader = res.headers.get("set-cookie");
    if (setCookieHeader) {
      response.headers.set("set-cookie", setCookieHeader);
    }

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to sign in" },
      { status: 500 }
    );
  }
}
