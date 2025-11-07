import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      }
    );

    const data = await res.json();
    const response = NextResponse.json(data);

    const setCookieHeader = res.headers.get("set-cookie");
    if (setCookieHeader) {
      response.headers.set("set-cookie", setCookieHeader);
    }

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to sign up" },
      { status: 500 }
    );
  }
}
