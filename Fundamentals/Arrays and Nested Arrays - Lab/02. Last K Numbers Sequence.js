function solve(n,k){
    let arr = [1];
    for(let i=0;i < n -1;i++){
        let elems = k;
        if(arr.length < k ){
            elems = i;
        }
        let num; 
        if(elems >= k){
             num = 0;
        }else{
             num = 1;
        }
     
        for(let j = 0;j < elems;j++){
            num += arr[i - j];
        }
        arr.push(num);
    }
    return arr;
}
solve(8, 2);