import koa from 'koa';
import { routes, allowedMethods } from './config/app-router';

const app = new koa();

app
  .use(routes)
  .use(allowedMethods);

app.listen(3000);
