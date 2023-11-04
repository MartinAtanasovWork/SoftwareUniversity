function partyTime(arr){
    let guestsList = [];
    let guests = [];
    let missingGuests = [];

    for(let i=0;i < arr.indexOf("PARTY");i++){
        if(guestsList.includes(arr[i])){
            guestsList.splice(guestsList.indexOf(arr[i]),1)
        }
        guestsList.push(arr[i]);           
    }

    for(let i = arr.indexOf("PARTY") + 1;i < arr.length;i++){
        if(guests.includes(arr[i])){
            guests.splice(guests.indexOf(arr[i]),1)
        }
        guests.push(arr[i]);     
    }
    for(let el of guestsList){
        if(!guestsList.includes(el)){
            missingGuests.push(el);
        }
    }
    let VIP =[];
    let nonVIP = [];
    for(let el of missingGuests){
        if((el[0] >= '0' && el[0] <= '9')){
            VIP.push(el);
        }else{
            nonVIP.push(el);
        }
    }
    console.log(missingGuests.length);
    for(let el of VIP){
        console.log(el);
    }
    for(let el of nonVIP){
        console.log(el);
    }
}
partyTime(['m8rfQBvl',
'fc1oZCE0','UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)