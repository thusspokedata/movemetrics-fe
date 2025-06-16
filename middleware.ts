import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const handleI18nRouting = createMiddleware(routing);

const isProtectedRoute = createRouteMatcher(["/:locale/dashboard(.*)"]);
const isApiRoute = createRouteMatcher(["/api/(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth.protect();
  }

  // Only apply i18n routing to non-API routes
  if (!isApiRoute(req)) {
    return handleI18nRouting(req);
  }
});


export const config = {
  // Match all pathnames except for
  // - Static files with extensions
  matcher: [
    // Match all paths that don't start with api, _next, etc.
    '/((?!api|trpc|_next|_vercel|.*\\..*|favicon.ico).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
