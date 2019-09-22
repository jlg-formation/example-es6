const express = require('express');
const serveIndex = require('serve-index');

const app = express();

const htdocs = '.';
app.use(express.static(htdocs));
app.use(serveIndex(htdocs, {
    icons: true
}));

const port = 8000;
app.listen(port, () => console.log('server started on port ' + port));
