function extensibleObject(){
    let myObj = {
        extend(obj){
            for(let [key,value] of Object.entries(obj)){
                if(typeof value == "function"){
                    Object.getPrototypeOf(this)[key] = value;
                }else{
                    this[key] = value;
                }
            }       
        }
    } 
    return myObj;
}

    const myObj = extensibleObject(); 
    myObj.extend({a:2});
    console.log(myObj.a); 
    