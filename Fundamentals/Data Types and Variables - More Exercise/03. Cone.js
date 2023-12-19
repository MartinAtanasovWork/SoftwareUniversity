function solve(radius,height){
    console.log(`volume = ${((Math.PI * radius * radius * height)/3).toFixed(4)}`);
    console.log(`area = ${(Math.PI * radius * (radius + Math.sqrt(radius ** 2 + height ** 2))).toFixed(4)}`);
}
solve(3,5)