(function(){
    Array.prototype.last = function (){
        return this[this.length -1];
    }
    Array.prototype.skip = function (n){
        return this.slice(n);
    }
    Array.prototype.take = function (n){
        return this.slice(0,n);
    }
    Array.prototype.sum = function (){
        return this.reduce((a,acc) => acc += a);
    }
    Array.prototype.average = function (){
        let average = 0;
        for(let el of this){
            average += el;
        }
        return average/this.length;
    }
})()

let a = [1,2,3];
console.log(a.last());
console.log(a.sum());