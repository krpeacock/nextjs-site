var express = require('express');
var bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match')
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json());
    const route = pathMatch();

    server.get('*', (req, res) => {
        return handle(req, res);
    })

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Server ready on http://localhost:${port}`);
    })
})