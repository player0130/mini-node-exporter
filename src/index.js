const { hostnameMiddleware } = require("./middlewares/info/hostnameMiddleware");
const { uptimeMiddleware } = require("./middlewares/info/uptimeMiddleware")
const { loadMiddleware } = require("./middlewares/info/loadMiddleware");
const { metricsMiddleware } = require("./middlewares/metricsMiddleware");

process.on('unhandledRejection', (reason, promise) => {
    console.error(`unhandledRejection! messages: ${reason},promise: ${JSON.stringify(promise)}`)
})

const app = require("express")();

app.use('/metrics', metricsMiddleware)
app.use('/info/hostname', hostnameMiddleware);
app.use('/info/uptime', uptimeMiddleware)
app.use('/info/load', loadMiddleware)

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(23333, '0.0.0.0');