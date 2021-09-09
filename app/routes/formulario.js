module.exports = function(app){
    app.get('/formularios' , function(req , res){
        res.render('formularios/formulario');
    }); 
};