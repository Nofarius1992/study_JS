const city = [ 'киев', 'пекин', 'токио', 'вашингтон' ];


let fixCity = city.map(city => city[0].toUpperCase + city.slice(1));
console.log(fixCity);