import router from 'koa-router';
import sequelize from './db-orm';

const appRouter = router();

appRouter.get('/', async (ctx, next) => {
  // ctx.router available
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  ctx.body = "hello world!";
});

export const routes = appRouter.routes();
export const allowedMethods = appRouter.allowedMethods();
