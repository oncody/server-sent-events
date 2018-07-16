const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/event', (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    // 'Connection': 'keep-alive' // is this needed?
  });

  let id = 1;

  setInterval(() => {
    response.write(`event: concatEvent\ndata:${id}\n\n`);
    response.write(`event: sumEvent\ndata:${id}\n\n`);
    response.write(`data: This is event ${id}.\n\n`);
    id++;
  }, 3000);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));