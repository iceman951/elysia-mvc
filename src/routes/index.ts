import { Elysia } from "elysia";
import { ohsmsRoute } from "./ohsms.route";

export const router = new Elysia()
  .group('/api', (api) =>
    api
      .use(ohsmsRoute)
      .get('/health', () => 'health')
  )
