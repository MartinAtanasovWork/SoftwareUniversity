function solve(arr){
    let old= 0;
    let news =0;
    for(let i=0;i < arr.length;i++){
        let el = arr[i];
        old += el;   
        if(el % 2 == 0){
            arr[i] = el + i;
        }else{
            arr[i] = el - i;
        }
        news += arr[i];
    }
    console.log(arr);
    console.log(old);
    console.log(news);
}
solve([5, 15, 23, 56, 35]
    )