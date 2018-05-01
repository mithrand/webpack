const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const fs = require('fs');
const path = require('path');

const DIST_FOLDER='dist';
const INDEX_FILE_NAME='index.html';

// Serve statics files
app.use('/', express.static(DIST_FOLDER));

// proxy for api redirect
const options = {
  proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
    // you can update headers
    proxyReqOpts.headers['Authorization'] = 'Basic ZnJvbnRlbmRfdGVzdDpzb25lbW90ZXN0aW5n';
    return proxyReqOpts;
  },
  proxyReqPathResolver: (req) => {
    const path = require('url').parse(req.url).path
    return '/api'+ path;
  },
};
app.use('/api/', proxy('https://tf-demo.sonemo.es',options))

app.use('*',(req,res,next) => {
  const filepath = path.join(DIST_FOLDER,INDEX_FILE_NAME);
  fs.readFile(filepath,'utf8',(err,data) => {
    if (err) {
      return next(err);
      return;
    }
    res.set('content-type', 'text/html');
    res.send(data);
    res.end();
  });
});

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});