function city(object){
    for(let key in object){
        console.log(key,"->",object[key]);
    }
}
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
   }
   )