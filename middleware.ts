import { url } from "inspector";
import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: { url: string | URL | undefined }) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "@/app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
