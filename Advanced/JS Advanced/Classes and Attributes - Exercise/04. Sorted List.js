class List{
    list;
    size;   

    constructor(){
        this.list = [];
        this.size = this.list.length;
    }
    add(elem){
        this.list.push(elem);
        this.sort();
        this.size = this.list.length;
    }
    remove(index){
        if(index < 0 || index > this.list.length){
            throw Error();
        }
        this.list.splice(index,1);
        this.sort();
        this.size = this.list.length;
    }
    get(index){
        if(index < 0 || index > this.list.length){
            throw Error();
        }
        return this.list[index];
    }

    sort(){
        this.list.sort((a,b) => a-b);
    }

}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(8);
console.log(list.get(1)); 
list.remove(1);
list.remove(-1);
console.log(list.get(1));
console.log(list.size);
