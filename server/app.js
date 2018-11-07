const Koa = require ('koa');
const app = new Koa;
const port = 3000;

app.use(ctx => {
	ctx.set('Content-Type', 'application/vnd.myapi.vi+json');
	ctx.body = {message: 'hello koa'};
})

app.listen(port);
console.log(`listening on port: ${port}`);


