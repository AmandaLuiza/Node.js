var app = require('./config/server');

var routehome = require('./app/routes/home')(app);
var routeformularios = require('./app/routes/formulario')(app);

app.listen(3000, function(){
    console.log('servidor')
});

