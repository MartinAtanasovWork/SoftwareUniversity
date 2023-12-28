function solve(students){
    let grades = {};
    
    for(let student of students){
        let tokens = student.split(", ");
        let name = tokens[0].split(": ")[1];
        let grade = Number(tokens[1].split(": ")[1]) + 1;
        let averageScore = tokens[2].split(": ")[1];
        grade.toString();
        if(averageScore >= 3.00){
            if(grade in grades){
                grades[grade].push({name,averageScore:Number(averageScore)});
            }else{
                grades[grade] = [{name,averageScore:Number(averageScore)}];
            }
        }
    }
    let i = 0;
   for(let [key,value] of Object.entries(grades)){
        if(i!=0){
            console.log("");
        }
        i++;
        console.log(key,"Grade");
        let names = [];
        let averageScore = 0;
        for(let el of value){
            names.push(el.name);
            averageScore += el.averageScore;
        }
        averageScore /= value.length;
        console.log(`List of students: ${names.join(", ")}`);
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
        
   }
}
solve([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
    
    )