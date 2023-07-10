const importar = require ('./collectibles');
const hotToys = importar('Hot Toys');
const bandai = importar('Bandai');
const starWars = importar('Star Wars');

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {

    figuras : unifiedCollectibles,

    listFigures : function () {
        for (figura of this.figuras) {
            console.log(figura);
        }
    },

    figuresByBrand : function (marcaDeFigura) {
        return this.figuras.map(json => json.filter(objeto => objeto.marca == marcaDeFigura));
        }
};


console.log(collectibles.figuresByBrand('Star Wars'));
console.log(collectibles.listFigures());