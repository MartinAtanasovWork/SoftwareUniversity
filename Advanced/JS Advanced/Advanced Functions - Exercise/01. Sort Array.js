function sortArray(arr,sort){
    let sortArr;
    if(sort == "asc"){
        sortArr = arr.sort((a,b) => {return a - b});
    }else if(sort == "desc"){
        sortArr = arr.sort((a,b) => {return b - a});
    }
    return sortArr;
}
sortArray([14, 7, 17, 6, 8], 'asc')