import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { router } from "./routes";

const app = new Elysia()
  .use(router)
  .use(swagger())
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);