function solve(arr){
    let arrays = [];
    let uniques = [];
    for(let el of arr){
        let line = el.substring(1,el.length -1);
        let numbers = line.split(", ").map(Number).sort((a,b) => b - a);
        arrays.push(numbers);
    }

    function arraysHaveSameElements(arr1, arr2) {
        if (arr1.length !== arr2.length) {
          return false;
        }

        return arr1.every(element => arr2.includes(element));
      }

    for(let arr of arrays){
        if(uniques.length == 0){
            uniques.push(arr);
        }
        let isUnique = true;
        for(let uniqueArr of uniques){
            if(arraysHaveSameElements(arr,uniqueArr)){
                isUnique = false;
            }
        }
        if(isUnique){
            uniques.push(arr);
        }
    }
   uniques.sort((a,b) => a.length - b.length);
   for(let arr of uniques){
    console.log(`[${arr.join(", ")}]`);
   }
}
solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]

);