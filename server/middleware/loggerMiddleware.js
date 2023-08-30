const fs = require('fs');

exports.routeLogger = (req, res, next) => {
    const start = new Date().getTime();
    
    const { method, url, query } = req;

    // Additional functionality: Log the client's IP address
    // const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    next();
    const end = new Date().getTime();
    const responseTime = end - start;

    // Additional functionality: Log the response status code
    const statusCode = res.statusCode;
    const logMessage = `Method: ${method} | Route Visited : ${url} | Status Code: ${statusCode} | Response Time: ${responseTime}ms | Time: ${new Date().toISOString()} \n \n`
    fs.appendFileSync('./routeTracking.txt', logMessage);
};
