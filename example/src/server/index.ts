import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { greetingRouter } from "./router";
import { createTRPCContext, router } from "./trpc";

const appRouter = router({
  greeting: greetingRouter,
});

const http = createHTTPServer({
  router: appRouter,
  createContext: createTRPCContext,
});

http.listen(3000);

console.log(" > Server: ready on http://localhost:3000");

export type AppRouter = typeof appRouter;

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
