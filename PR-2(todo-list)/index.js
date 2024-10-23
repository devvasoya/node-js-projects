const http = require('http');

const port = 9000;

const fs = require('fs');

const pageSetup = (req, res) => {
    let fileName = "";
    switch (req.url) {
        case '/':
            fileName = './index.html'
            break;
        case '/about':
            fileName = './about.html'
            break;
        case '/con':
            fileName = './contect.html'
            break;
        default:
            fileName = './404-err.html'
            break;
    }

    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.log(err);
            return false;
        }
        res.end(data);
    })
}
const server = http.createServer(pageSetup);

server.listen(port, (err) => {
    if (!err) {
        console.log('server running..');
    }
    console.log(err);
    return false;
})