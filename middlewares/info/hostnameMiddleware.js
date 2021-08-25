const shell = require('shelljs')

const hostnameMiddleware = async (req, res, next) => {
    const hostname = shell.cat('/proc/sys/kernel/hostname')
    if (!!hostname) {
        next()
    }
    res.set('Content-Type', 'text/plain')
    res.send(hostname.stdout);
}

module.exports = {
    hostnameMiddleware
}