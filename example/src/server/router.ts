import z from "zod";
import { procedure, router } from "./trpc";

export const greetingRouter = router({
  hello: procedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .query(({ input }) => `Hello, ${input.name}!`),

  test: procedure
    .meta({
      test: "test",
    })
    .query(() => "test"),
});
