const { getLoad } = require('../../lib/getLoad')

const loadMiddleware = async (req, res, next) => {
    const loadData = getLoad()
    if (!!loadData) {
        next()
    }
    const loadavg = {
        "1m": loadData[0],
        "5m": loadData[1],
        "15m": loadData[2]
    }
    res.json(loadavg);
}

module.exports = {
    loadMiddleware
}