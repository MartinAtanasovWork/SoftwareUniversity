class Company{
    departments;

    constructor(){
        this.departments = {};
    }

    addEmployee(name,salary,position,department){
        salary = Number(salary);
        if(name == "" || salary == "" || position == "" || department == ""){
            throw Error("Invalid input!");   
        }
        if(name == undefined || salary == undefined || position == undefined || department == undefined){
            throw Error("Invalid input!");   
        }
        if(name == null || salary == null || position == null || department == null){
            throw Error("Invalid input!");   
        }
        if(salary < 0){
            throw Error("Invalid input!");
        }

        if(department in this.departments){
            this.departments[department].push({name,salary,position});
        }else{
            this.departments[department] = [];
            this.departments[department].push({name,salary,position});
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }   

    bestDepartment(){
        let [bestDepartment,bestSalary] = this.findBestDepartment();
        let result = ""
        result += `Best Department is: ${bestDepartment}` + "\n";
        result += `Average salary: ${bestSalary.toFixed(2)}` + "\n";

        let employees = this.departments[bestDepartment];

        employees.sort((a,b) => {
            let str1 = a.name;
            let str2 = b.name;
            return str1.localeCompare(str2);
        })    
        employees.sort((a,b) =>{
            return b.salary - a.salary;
        })
        let a = [];
        for(let guy of employees){
            a.push(`${guy.name} ${guy.salary} ${guy.position}`);
        }
        result += a.join("\n")
        return result
    }

    findBestDepartment(){
        let best = "";
        let bestSalary = 0;
        
        for(let department in this.departments){
            let currentSalary = 0;
            let employees = 0;

            for(let guy of this.departments[department]){
                currentSalary += guy.salary;
                employees++;
            }
            currentSalary /= employees;

            if(currentSalary > bestSalary){
                bestSalary = currentSalary;
                best = department;
            }
        }

        return [best,bestSalary]
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
