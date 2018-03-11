import router from 'koa-router';

const appRouter = router();

appRouter.get('/', async (ctx, next) => {
  // ctx.router available
  ctx.body = 'Hello world 123';
});

export const routes = appRouter.routes();
export const allowedMethods = appRouter.allowedMethods();
