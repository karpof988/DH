const precios = [10,15,20,25];

const resultado = precios.filter((precio) => {
    return precio < 16;
});

console.log('Array original', precios);
console.log('Array nuevo', resultado);
