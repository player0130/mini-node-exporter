const { getUptime } = require("../../lib/getUptime")

const uptimeMiddleware = async (req, res, next) => {
    const uptime = getUptime()
    if (!!uptime) {
        next()
    }
    res.set('Content-Type', 'text/plain')
    res.send(uptime);
}

module.exports = {
    uptimeMiddleware
}