function solve(year,month,date){
    let data = new Date(year,month - 1,date - 1);
    console.log(`${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`);
}
solve(2015, 0, 1)
