function rectangle(width,height,color){
    color = color[0].toUpperCase() + color.slice(1,color.length);
    let rectangle = {width,height,color,calcArea(){
        return height * width;
    }};
    return rectangle;
    }
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
