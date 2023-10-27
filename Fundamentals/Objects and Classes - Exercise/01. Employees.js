function employees(arr){
    for(let info of arr){
        let employee = {name : info,pn : info.length}
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.pn}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )