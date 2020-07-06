const fs = require("fs");
const pjson = JSON.parse(
  fs.readFileSync("./data/concesionarias.json", "utf-8")
);

const autos = {
  autos: (req, res) => {
    res.set({ "content-type": "text/plain;charset=utf-8" });
    let auto = [];
    res.write("Los diferentes modelos de autos : \n");
    res.write("_________________ \n\n");

    pjson.forEach((m) => {
      m.autos.forEach((m) => {
        auto.push(m);
      });
      auto.forEach((m) => {
        res.write("Marca: " + m.marca + "\n");
        res.write("Modelo: " + m.modelo + "\n");
        res.write("Año: " + m.anio + "\n");
        res.write("Color: " + m.color + "\n");
        res.write("_______________________" + "\n");
      });
    });
  },
};
module.exports = autos;
