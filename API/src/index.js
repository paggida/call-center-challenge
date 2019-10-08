const server = require('./server');

server.listen(process.env.API_PORT || 3000);
console.log(`API url: http://localhost:${process.env.API_PORT || 3000}`);
