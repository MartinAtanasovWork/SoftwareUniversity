function add(num){
    let sum = num;

    function adder(num){
        sum += num;
        return adder;
    }

    adder.toString = function (){
        return sum;
    }
    return adder;
}
console.log(add(1).toString());