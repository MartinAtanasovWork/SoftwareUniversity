(function(){
   String.prototype.ensureStart = function (str){
        if(this.startsWith(str)){
            return this.toString();
        }else{
            return str + this;     
        }
   }
   String.prototype.ensureEnd = function (str){
    if(this.endsWith(str)){
        return this.toString();
    }else{
        return this + str;
    }
}
   String.prototype.isEmpty = function (){
        if(this.length == 0){
            return true;
        }else{
            return false
        }
   }
   String.prototype.truncate = function (n){
        if(n < 4){
            return ".".repeat(n);
        }

        if(this.length <= n){
            return this.toString();
        }

        if(this.includes(" ")){
            let words = this.split(" ");
            let result = [];
            for(let word of words){
                if(result.join(" ").length + word.length + 3 <= n){
                    result.push(word); 
                }else{
                    break;
                }
            }
            return result.join(" ") + "...";
        }
        return this.slice(0,n-3) + "...";
   }
   String.format = function(str,...params){
        for(let i =0;i < params.length;i++){
            console.log();
            str = str.split(`{${i}}`).join(params[i]);
        }
        return str;
   }
})()

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
  console.log(str);
str = String.format('jumps {0} {1}',
  'dog');
console.log(str);    