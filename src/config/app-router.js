import router from 'koa-router';
import { greeting } from './db-connection';

const appRouter = router();

appRouter.get('/', async (ctx, next) => {
  // ctx.router available
  ctx.body = await greeting();
});

export const routes = appRouter.routes();
export const allowedMethods = appRouter.allowedMethods();
