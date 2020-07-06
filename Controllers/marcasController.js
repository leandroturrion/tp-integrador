const fs = require("fs");
dbConcesionarias = JSON.parse(
  fs.readFileSync("./data/concesionarias.json", "utf-8")
);

const marcasController = {
  marcas: (req, res) => {
    res.set({ "content-type": "text/plain;charset=utf-8" });
    res.write("Bienvenidos a la mejor concesionaria!\n");
    
     //con flatMap hice que me guarde en AutosDisponibles, todos los autos en UN solo array.

    let autosDisponibles = dbConcesionarias.flatMap(function (d) {
        return d.autos;
    });

    // con  .map hice que me guarde todas las marcas de los autosen Marcas

    let marcas = autosDisponibles.map(function (e){
        return e.marca

    });
    //recorri las marcas con el forEach y me devolvio las marcas en pantalla (res.write) y con New Set q no se repitan
      new Set (marcas).forEach((f) =>{
          res.write("Marcas disponibles!: "+ f + "\n \n")

      });


    res.end();
  },

  marca: (req, res) => {
    res.set({ "content-type": "text/plain;charset=utf-8" });
    let id = req.params.id;
    dbConcesionarias.forEach((a) => {
      a.autos.forEach((c) => {
        if (c.marca == id) {
          res.write("Marca: " + c.marca + "\n");
           res.write("Modelo: " +c.modelo+ "\n");
           res.write ("Año: " + c.anio+ "\n");
           res.write("\n \n");
           
        } else {
         new Set (res.write("No disponemos de tal marca. Lo sentimos."))
         
         res.end ()
         }
         
    });
});
    res.end();
  },
};
module.exports = marcasController;
