const Koa = require('koa');
const compress = require('koa-compress')
const Router = require('koa-router');
const send = require('koa-send');
const fs = require('fs');
const {Z_SYNC_FLUSH} = require('zlib');

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 8080;

app.use(compress({
    flush: Z_SYNC_FLUSH
}));

router.get('/', ctx => send(ctx, 'dist/index.html'));
router.get('/*', ctx => send(ctx, ctx.path, { root: `${__dirname}/dist` }));

app.use(router.routes()).use(router.allowedMethods());
app.listen(PORT);

console.log(`Server is running @ http://localhost:${PORT}`);
