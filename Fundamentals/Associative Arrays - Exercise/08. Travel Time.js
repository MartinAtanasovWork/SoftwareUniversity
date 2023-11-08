function traveltime(arr){
    let travel = {};
    for(let el of arr){
        let [country,city,price] = el.split(' > ');
        price = Number(price);
        if(travel.hasOwnProperty(country)){
            if(travel[country][0].hasOwnProperty(city)){
                if(travel[country][0][city] > price){
                    travel[country][0][city] = price;
                }
            
            }else{
                travel[country].push({[city]:price});
            }
          
        }else{
            travel[country] = [{[city]:price}];
        } 
      
    }
    let entries = Object.entries(travel);
    entries.sort((a,b) => a[0].localeCompare(b[0]));
    travel = Object.fromEntries(entries);
    
    for(let [key,value] of Object.entries(travel)){
        let helper = [];
        for(let i=0;i<value.length;i++){
            let entries = Object.entries(value[i]);
            let add = `${entries[0][0]} -> ${entries[0][1]}`;
            helper.push(add);   
        }
        let obj = {};
       for(let el of helper){
        let [name,price] = el.split(" -> ");
        obj[name] = price;
       }
       let entrs = Object.entries(obj);
       entrs.sort((a,b) => a[1] - b[1]);
       obj = Object.fromEntries(entrs);
       let print = [];
       for(let [key,value] of Object.entries(obj)){
        print.push(`${key} -> ${value}`);
       }
        console.log(key,"->",print.join(" "));;
    }
}
traveltime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    
    )