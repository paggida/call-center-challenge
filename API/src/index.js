const server = require('./server');

server.listen(process.env.PORT || 3000);
console.log(`API url: http://localhost:${process.env.PORT || 3000}`);
