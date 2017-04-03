var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    fs = require('fs');

var options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

var https = require('https').createServer(options, app),
    io = require('socket.io')(https);

io.on('connection', (socket) => {
    console.log('connected...');
    socket.emit('event', 'hi there!!!');
    socket.disconnect();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('combined'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));

app.set('views', __dirname + '/public/views');
app.set('view engine', 'pug');

app.get('/api', (req, res) => {
    res.json({'hello world': 1});
});

app.get('/app/:page', (req, res) => {
    res.render(req.params.page);
});

app.get(/^\/(?!api)/, (req, res) => {
    res.render('index');
});

https.listen(8081, () => {
    console.log('secure server started on port', 8081);
});
