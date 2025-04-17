const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // for middleware whether send the responce or to pass on next middleware
    //res.send('Testing...');  // terminateing the cycle.
    next();
}

module.exports = logger;