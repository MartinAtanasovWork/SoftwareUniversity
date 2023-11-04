function adressbook(arr){
    let adressbook = {};
    for(let i=0;i < arr.length;i++){
        let [name,adress] = arr[i].split(":");
        adressbook[name] = adress;
    }
    let entries = Object.entries(adressbook);
    entries.sort();
    adressbook = Object.fromEntries(entries);
    for(let [key,value] of Object.entries(adressbook)){
        console.log(key,"->",value);
    }
}
adressbook(['Bob:Huxley Rd',
'John:MilwaukeeCrossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:MestaCrossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)