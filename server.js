let webApp = new webApp();
let app = webApp.create();
const http = require('http');

const server = http.createServer(app);
server.listen(9999);
console.log('listening at 9999');
console.log('waiting For requests');
