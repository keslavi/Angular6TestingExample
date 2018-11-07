const Koa = require ('koa');
const morgan = require('koa-morgan')
const logger = require('koa-morgan');

const fs = require('fs')
 
// create a write stream (in append mode)
const accessLogStream = fs
	.createWriteStream(__dirname + '/access.log',{ flags: 'a' })

const app = new Koa;
const port = 3000;

app.use(logger('tiny'));
//app.use(morgan('combined', { stream: accessLogStream }))

app.use(ctx => {
	ctx.set('Content-Type', 'application/vnd.myapi.vi+json');
	ctx.body = {message: 'hello koa'};
})

app.listen(port);
console.log(`listening on port: ${port}`);


