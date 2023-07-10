function importar (...marcas) {
    let marca = marcas.map(function (marcaSolicitada) {
        if (marcaSolicitada == 'Hot Toys') {
            marcaSolicitada = require ("./datos/figuras1.json");
        }else if (marcaSolicitada == 'Bandai') {
            marcaSolicitada = require ("./datos/figuras2.json");
        }else if (marcaSolicitada == 'Star Wars') {
            marcaSolicitada = require ("./datos/figuras3.json");
        }
        return marcaSolicitada
    })
    return marca
}

module.exports = importar
