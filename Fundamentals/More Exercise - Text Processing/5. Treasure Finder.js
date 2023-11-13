function treasureFinder(arr){
    let key = arr.shift().split(" ");
    arr.pop();
    let index = 0;
    for(let el of arr){
        let string = "";
        for(let i=0;i < el.length;i++){
            let letter = (el[i].charCodeAt() - key[index])
            index++;
            if(index > key.length -1){
                index = 0;
            }
            string += String.fromCharCode(letter);
        }
        let first = string.indexOf("&");
        let newString = string.substring(first + 1,string.length);
        let item = newString.substring(0,newString.indexOf("&"))

        let second = string.indexOf("<");
        let cordinatesStr = string.substring( second + 1,string.length);
        let coordinates = cordinatesStr.substring(0,cordinatesStr.indexOf(">"))
        
        console.log(`Found ${item} at ${coordinates}`);
    }
}
treasureFinder(["1 2 1 3",
"ikegfp'jpne)bv=41P83X@",
"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
"find"]
)