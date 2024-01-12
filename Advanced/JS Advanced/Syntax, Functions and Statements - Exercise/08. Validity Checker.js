function solve(x1,y1,x2,y2){
    let p1 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
    let p2 = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2);
    let xy = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let is1valid = "invalid";
    let is2valid = "invalid";
    let isxyvalid = "invalid";
    if(Number.isInteger(p1)){
        is1valid = "valid";
    }
    if(Number.isInteger(p2)){
        is2valid = "valid";
    }
    if(Number.isInteger(xy)){
         isxyvalid = "valid";
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${is1valid}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${is2valid}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isxyvalid}`);
}
solve(2, 1, 1, 1)