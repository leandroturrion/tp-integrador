const express = require('express');
const app = express();

//rutas

const routeHome = require('./routes/home');
const routeSucursales = require('./routes/sucursales');
const routeAutos = require('./routes/autos');
const routeMarcas = require ('./routes/marcas');



app.use("/",routeHome)
app.use("/sucursales", routeSucursales)
app.use("/marcas",routeMarcas)
app.use("/autos", routeAutos)



//servidor
app.listen(3030,()=>console.log("El servidor esta funcionando en el puerto 3030"));