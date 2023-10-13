function solve(arr){
    let guests = [];
    for(let el of arr){
        let arr = el.split(" ");
        if(arr[2] == "not"){
            if(guests.includes(arr[0])){
                for(let i=0;i < guests.length;i++){
                    if(guests[i] == arr[0]){
                        guests.splice(i,1);
                    }
                }
            }else
            console.log(`${arr[0]} is not in the list!`);
          
        }else{
            if(guests.includes(arr[0])){
                console.log(`${arr[0]} is already in the list!`);
            }else{
                guests.push(arr[0]);
            }
        }
    }
    for(let el of guests){
        console.log(el);
    }
}
solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)