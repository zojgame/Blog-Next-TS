import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = formData.get("name");
  const password = formData.get("password");

  if (name === "admin" && password === "123") {
    const cookieOptions = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      path: "/",
    };
    return new Response("Success Authorization", {
      status: 200,
      headers: {
        "Set-Cookie": `name=${name}; expires=${cookieOptions.expires.toUTCString()}; path=${
          cookieOptions.path
        };`,
      },
    });
  }

  return new Response("Incorrect name or password", { status: 404 });
}
