function filterEmployees(stringEmployees,criteriaString){
    let arr = JSON.parse(stringEmployees);
    let filtered = 0;
    if(filter == "all"){
        for(let employy of arr){
            console.log(`${employy.id - 1}. ${employy["first_name"]} ${employy["last_name"]} - ${employy.email}`);
        }
    }else{
        for(let emplyee of arr){
            filter.call(emplyee,criteriaString);
            
        }
    }
    function filter(criteria){
        let [key,value] = criteria.split("-");
        if(this[key] == value){
            console.log(`${filtered++}. ${this["first_name"]} ${this["last_name"]} - ${this.email}`);
        }
    }
}
filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

)