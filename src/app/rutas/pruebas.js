module.exports = (app) => {
    app.get("/apiRest/getHello", (req, res, next) => {

        res.send('Hola Mundo');
    });

    app.get("/apiRest/getJson", (req, res, next) => {

        res.json({
            data: [
                {
                    nombres: 'Jonatan Valentin',
                    apellidos: 'Maldonado Gonzalez',
                    fecha_nacimiento: '2000-07-19',
                    lugar_nacimiento: 'Guatemala'
                },
                {
                    nombres: 'Abner Jose',
                    apellidos: 'Ramirez Paiz',
                    fecha_nacimiento: '1997-05-29',
                    lugar_nacimiento: 'Guatemala'
                },
                {
                    nombres: 'Joel Efrain',
                    apellidos: 'Lopez Obrador',
                    fecha_nacimiento: '1999-02-10',
                    lugar_nacimiento: 'Guatemala'
                },
                {
                    nombres: 'David Emanuel',
                    apellidos: 'Gonzalez Perez',
                    fecha_nacimiento: '2002-12-22',
                    lugar_nacimiento: 'Guatemala'
                },
                {
                    nombres: 'Pablo Javier',
                    apellidos: 'Ruiz Acosta',
                    fecha_nacimiento: '2000-04-02',
                    lugar_nacimiento: 'Guatemala'
                },
            ]
        });
    });

    app.get("/apiRest/getConcat", (req, res, next) => {
        const cadena3 = req.query.cadena1 + req.query.cadena2;
        res.send(cadena3);
    });
}