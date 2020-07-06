let fs = require('fs');
const marca = require('./marcasController');
let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const sucursales = { 
    sucursalesUno: (req,res)=> {res.set({'content-type':'text/plain;charset=utf-8'})
        res.set({'context-type':'text/plain;charset=utf-8'})
        res.write("Bienvenidos a la mejor concesionaria!\n")
        dbConcesionarias.forEach(a => {
            res.write("Sucursales:  " + a.sucursal +"\n")
            res.write("Telefono: " + a.telefono+"\n")
            res.write("Direccion: "+ a.direccion+ "\n")
         })
    res.end()
},
        sucursalesDos: (req,res) =>{
            res.set({'content-type':'text/plain;charset=utf-8'})
            let id = req.params.id 
            dbConcesionarias.forEach(a=> {
                if (a.sucursal == id){
                    res.write("Sucursales:  " + a.sucursal +"\n")
                    res.write("_____________________________\n")
                    res.write("Telefono: " + a.telefono+"\n")
                    res.write("Direccion: "+ a.direccion+ "\n")
                    res.write("autos\n")
                    a.autos.forEach(a=>{
                        res.write("Marca: " +a.marca+"\n")
                        res.write("anio: "+a.anio+"\n")
                        res.write("color: "+a.color+"\n")
                        res.write("modelo: "+a.modelo+"\n")
                    }
                        )
                    res.end()
                } 
            }  
            )
    }
}

module.exports = sucursales