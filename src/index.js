const app = require('./config/server');
require('./app/rutas/pruebas')(app);

app.listen(app.get("PORT"), () => console.log(`Servidor corriendo en puerto ${app.get("PORT")}`));