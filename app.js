// // Esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// // Solo un registro en consola para nosotros
// console.log(sum(7,3))

// // Exporta la función para usarla en otros archivos 
// // (similar a la palabra clave "export" cuando se usa webpack)
// module.exports = { sum };

// let oneEuroIs = {
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }


function fromEuroToDollar (euros){
    return euros * 1.07    
}
function fromDollarToYen(dolares){
    return (dolares/1.07)*156.5
}
function fromYenToPound(yenes){
    return (yenes/156.5)*0.87
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}