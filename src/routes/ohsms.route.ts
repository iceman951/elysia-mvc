import { Elysia } from "elysia";

export const ohsmsRoute = new Elysia({ prefix: '/ohsms' })
  .get('/training-evacuation', 'training-evacuation')
  .get('/training-fire-basic', 'training-fire-basic')
  .get('/inspect-environment', 'inspect-environment')
  .get('/inspect-electrical', 'inspect-electrical')