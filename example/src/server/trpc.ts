import { initTRPC, type inferAsyncReturnType } from "@trpc/server";
import superjson from "superjson";

// Context
type ContextProps = {};

export const createContextInner = ({}: ContextProps) => {
  return {};
};

export const createTRPCContext = () => {
  return createContextInner({});
};

type CreateTRPCContext = typeof createTRPCContext;
type Context = inferAsyncReturnType<CreateTRPCContext>;

// Meta
type Meta = {
  test: string;
};

// Init TRPC
export const t = initTRPC.context<Context>().meta<Meta>().create({
  transformer: superjson,
});

export const procedure = t.procedure;
export const router = t.router;
