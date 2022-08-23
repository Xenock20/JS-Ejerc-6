const listaDeCompra = ["huevo","leche","harina","azucar","manteca"];
console.log(listaDeCompra);
listaDeCompra.push("Aceite de Girasol");
console.log(listaDeCompra);
listaDeCompra.pop();
console.log(listaDeCompra);

const pelis = [
    {
        titulo: "Rapido Y Furiosos",
        director: "Vin Diesel",
        fecha: "2009"
    },
    {
        titulo: "Rapido Y Furiosos 2",
        director: "Vin Diesel",
        fecha: "2012"
    },
    {
        titulo: "Rapido Y Furiosos 3",
        director: "Vin Diesel",
        fecha: "2015"
    },
]
console.log(pelis);

const posteriores = pelis.filter(pelis => pelis.fecha > 2010);
console.log(posteriores);


const directores = pelis.map(pelis =>{
    return pelis.director;
});

console.log(directores);

const titulos = pelis.map(pelis =>{
    return pelis.titulo;
})

console.log(titulos);

const newArray = directores.concat(titulos);

console.log(newArray);

const newArrayTwo = [...directores, ...titulos];

console.log(newArrayTwo);


