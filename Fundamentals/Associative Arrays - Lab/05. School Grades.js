function grades(arr){
    let students = {};
    for(let el of arr){
        let tokens = el.split(" ");
        let name = tokens.shift();
        if(students.hasOwnProperty(name)){
            for(let el of tokens){
                students[name].push(Number(el))
            }
        }else{
            let arr = [];
            for(let el of tokens){
                arr.push(Number(el));
            }
            students[name] = arr;
        }
    }
    let averageGradeStudents = {};
    for(let [key,value] of Object.entries(students)){
        let averageGrade = 0;
        for(let i =0;i < value.length;i++){
            averageGrade += Number(value[i]);
        }
        averageGradeStudents[key] = averageGrade / value.length;
    }
    let entries = Object.entries(averageGradeStudents);
    let sortedStudents = Object.fromEntries(entries.sort());
    for(let [key,value] of Object.entries(sortedStudents)){
        console.log(`${key}: ${value.toFixed(2)}`);
    }
}
grades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)