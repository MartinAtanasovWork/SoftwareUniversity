function tickets(arr,criteria){

    class Ticket{
        destination;
        price;
        status;

        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status; 
        }
    }

    let ticketsArr = [];

    for(let el of arr){
        let [dest,pr,stat] = el.split("|");

        let ticket = new Ticket(dest,Number(pr),stat);
        
        ticketsArr.push(ticket);
    }

    if(criteria == "destination"){
        ticketsArr.sort((a,b) => {
            let str1 = a.destination;
            let str2 = b.destination;
            return str1.localeCompare(str2);
        } );
    }else if(criteria == "price"){
        ticketsArr.sort((a,b) => {return Number(a.price) - Number(b.price)})
    }else if(criteria == "status"){
        ticketsArr.sort((a,b) => a.status.localeCompare(b.status));
    }

    return ticketsArr;
}
let result = tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
);
for(let el of result){
    for(let key in el){
        console.log(key,el[key]);
    }
}