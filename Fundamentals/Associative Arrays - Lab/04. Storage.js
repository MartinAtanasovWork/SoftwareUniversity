function storage(arr){
    let storage = new Map();
    for(let el of arr){
        let [item,count] = el.split(" ");
        if(storage.has(item)){
            let newCount = storage.get(item) + Number(count);
            storage.set(item,newCount);
        }else{
            storage.set(item,Number(count));
        }
    }
    for(let item of storage.keys()){
        console.log(item,"->",storage.get(item));
    }
}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']

)
