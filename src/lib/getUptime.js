const shell = require('shelljs')

const getUptime = () => {
    return shell.cat('/proc/uptime').stdout.split(' ')[0]
}

module.exports = {
    getUptime
}