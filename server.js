const http = require('http');
const https = require('https');

http.createServer((req, res) => {
  https.get('https://14943.live.streamtheworld.com/KPWRAAC.aac', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  }, (stream) => {
    res.writeHead(stream.statusCode, stream.headers);
    stream.pipe(res);
  }).on('error', () => res.end('error'));
}).listen(3000);
