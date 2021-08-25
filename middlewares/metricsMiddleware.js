const { getLoad } = require('../lib/getLoad')
const { getUptime } = require('../lib/getUptime')

const metricsMiddleware = async (req, res, next) => {
    const uptime = getUptime()
    const loadData = getLoad()

    res.set('Content-Type', 'text/plain')

    let metrics = ''

    if (loadData) {
        metrics += `# TYPE node_load gauge
node_load{duration="1m"} ${loadData[0]}
node_load{duration="5m"} ${loadData[1]}
node_load{duration="15m"} ${loadData[2]}
`
    }

    if (uptime) {
        metrics += `# TYPE node_uptime gauge
node_uptime ${uptime}`
    }

    res.send(metrics)
}

module.exports = {
    metricsMiddleware
}