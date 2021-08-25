const shell = require('shelljs')

const getLoad = () => {
    return shell.cat('/proc/loadavg').split(' ')
}

module.exports = {
    getLoad
}