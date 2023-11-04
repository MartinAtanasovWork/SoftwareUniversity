function comapnyUsers(arr){
    let companies = {};
    for(let el of arr){
        let [company,user] = el.split(" -> ");
        if(company in companies){
            companies[company].push(user);
        }else{
            companies[company] = [user];
        }
    }
    let entries = Object.entries(companies);
    let sorted = entries.sort((a,b) => a[0].localeCompare(b[0]))
    companies = Object.fromEntries(sorted);
    for(let [key,value] of Object.entries(companies)){
        let users = new Set(value);
        console.log(key);
        for(let el of users){
            console.log(`-- ${el}`);
        }
    }
}
comapnyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']
    );