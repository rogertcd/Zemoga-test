const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[ env ];
const { engine } = require('express-handlebars');
const portfolioRoutes = require('./routes/portfolioRoutes');
const profileRoutes = require('./routes/profileRoutes');

const http = require('http');

const app = express();

// Logger
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Routes
 */
app.use(express.json());
app.use(portfolioRoutes);
app.use(profileRoutes);

/**
 * Motor de plantillas
 */
app.engine('.hbs', engine({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/public/views'));
app.use("/apidoc", express.static(__dirname + '/public/apidoc'));
app.use("/bootstrap", express.static(__dirname + '/node_modules/bootstrap/dist'));

// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of nothingness.',
// }));

const port = parseInt(config.appPort, 10) || 3000;
app.set('port', port);
const server = http.createServer(app);
// server.listen(port);
server.listen(port, () => {
    console.log(`La app está funcionando en http://${config.appUrl}:${port}`);
});

module.exports = app;
