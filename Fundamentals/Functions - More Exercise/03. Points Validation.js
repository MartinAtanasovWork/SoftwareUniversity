function pointsValidation(arr){
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    let distanceXY = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let distanceX0 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
    let distance0Y = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
   if(Number.isInteger(distanceX0)){
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
   }else{
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
   }
   if(Number.isInteger(distance0Y)){
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
   }else{
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
   }
   if(Number.isInteger(distanceXY)){
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
   }else{
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
   }
}
pointsValidation([3,0,0,4])
