const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')

//使用views .pug的文件作为渲染模板
app.use(views(resolve(__dirname,'./views'),{
	extension: 'pug'
}))

app.use( async(ctx) => {
	await ctx.render('index',{
		you:'Luke',
		me:'Scott'
	})
})
app.listen(8888)
console.log("demo in run")
