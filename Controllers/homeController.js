let fs = require('fs');
let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))
const home = {
    home : (req,res)=>{
        res.set({'context-type':'text/plain;charset=utf-8'})
        res.write("Bienvenidos a la mejor concesionaria!\n")
        dbConcesionarias.forEach(a => {
            res.write("Sucursales:  " + a.sucursal +"\n")
        

        });

        res.end ()
    },
    
}

module.exports = home;