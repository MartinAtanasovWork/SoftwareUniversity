function solve(arr){
    let flights = {};
    let sectorsArr = arr.shift();
    for(let el of sectorsArr){
        let [sector,Destination] = el.split(" ");
        Destination = el.substring(el.indexOf(" ") + 1,el.length);
        flights[sector] = {Destination,changed:false};
    }
    let changes = arr.shift();
    for(let el of changes){
        let [sector,status] = el.split(" ");

        if(sector in flights){
            flights[sector]["Status"] = status;
            flights[sector].changed = true;
        }
    }
    let command = arr.shift()[0];
    if(command == "Ready to fly"){
        for(let flight in flights){
            if(!flights[flight].changed){
                delete flights[flight].changed;
                flights[flight].Status = "Ready to fly";
                console.log(flights[flight]);
            }
       }
    }else{
        for(let flight in flights){
            if(flights[flight].changed)
            {
                delete flights[flight].changed
                console.log(flights[flight]);
            }
       }
   }
}
solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]

)