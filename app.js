var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swaggerJSDoc = require('swagger-jsdoc');
var jwt = require('jsonwebtoken');
var secret =  require('./config.json').secret;
var index = require('./routes/index');

// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(function (req,res,next) {
    var a =req;
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var swaggerSpec = swaggerJSDoc({
    swaggerDefinition: {
        info: {
            title: 'Node Swagger API',
            version: '2.0.0',
            description: 'GuoSen RESTful API with Swagger',
        },
        host: 'localhost:3000',
        basePath: '/',
    },
    apis: ['./routes/*.js'],
});

app.use(cookieParser('pciekdh'));
app.use(function (req,res,next) {
    const cookies=req.signedCookies;
    if(cookies.token){
        req.token = jwt.verify(cookies.token,secret);
    }
    next();
});

app.use('/api', index);
app.get('/api/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});
// app.use('/api/users', users);
app.use(function (req,res,next) {
    if(req.path=='/'&&req.method=='GET'){
        res.redirect('/swagger-ui');
    }else{
        next();
    }
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
