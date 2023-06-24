import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";
import superjson from "superjson";
import type { AppRouter } from "./server";

const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === "development" ||
        (opts.direction === "down" && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: `http://localhost:3000`,
    }),
  ],
});

async function main() {
  const response = await trpc.greeting.hello.query({
    name: "world",
  });

  console.log("response", response);
}

void main();
