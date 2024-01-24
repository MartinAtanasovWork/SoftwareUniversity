function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let textareaElement = document.querySelector("textarea");
      let dataArr = JSON.parse(textareaElement.value);
      let restaurants = {};
      for(let data of dataArr){
         let [name,workersString] = data.split(" - ");
         let workersArr = workersString.split(", ");
         let workers = {};
         if(name in restaurants){
            for(let worker of workersArr){
               let [workerName,salary] = worker.split(" ");
                  workers[workerName] = Number(salary);
            } 
            let newObj = {
               ...restaurants[name]["workers"],
               ...workers
            }
            restaurants[name]["workers"] = {"workers":newObj}
         }else{
            for(let worker of workersArr){
               let [workerName,salary] = worker.split(" ");
               workers[workerName] = Number(salary);
            }
            restaurants[name] = {"workers" : workers};
            }
         }
         
         for(let [key,value] of Object.entries(restaurants)){
            let averageSalary = 0;
            let bestSalary = 0;
            let employyes = 0;
            for(let [key1,value1] of Object.entries(value)){
               for(let [name,salary] of Object.entries(value1)){
                  averageSalary += salary;
                  employyes++;
                  if(salary > bestSalary){
                     bestSalary = salary;
                  }
               }
            }
            averageSalary /= employyes;
            restaurants[key].averageSalary = Math.round(averageSalary * 100)/100;
            restaurants[key].bestSalary = Math.round(bestSalary*100)/100;
         }
         
         let entries = Object.entries(restaurants);
         let sorted = entries.sort((a,b) => {
            return b[1].averageSalary - a[1].averageSalary;
         });
         restaurants = Object.fromEntries(sorted);
         let index = 0;
         let bestRest = document.querySelector("div#bestRestaurant p");
         let bestRestWorkers = document.querySelector("div#workers p");
         for(let [key,value] of Object.entries(restaurants)){
            if(index == 0){
               bestRest.textContent = `Name: ${key} Average Salary: ${restaurants[key].averageSalary.toFixed(2)} Best Salary: ${restaurants[key].bestSalary.toFixed(2)}`
               let workersString = [];
               let workers = Object.entries(restaurants[key]["workers"]);
               let sortedWorkers = workers.sort((a,b) => {
                  return b[1] - a[1];
               });
               for(let [name,salary] of sortedWorkers){
                  workersString.push(`Name: ${name} With Salary: ${salary}`);
               }
               bestRestWorkers.textContent = workersString.join(" ");
            }

            index++;
         }
      }
   }
