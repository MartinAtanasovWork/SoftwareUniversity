function generateReport() {
    let headings = Array.from(document.querySelectorAll("table thead tr th"));
    let headingsArr = [];
    for(let heading of headings){
        headingsArr.push(heading.textContent);
    }
    let rows = Array.from(document.querySelectorAll("table tbody tr"));
    let employees = [];
    for(let row of rows){
        employees.push(employeeObject(row,headings));
    }
    
    let checkboxElements = Array.from(document.querySelectorAll("table thead tr th input"));
    let checkedHeadings = [];
    for(let checkbox of checkboxElements){
        if(checkbox.checked){
            checkedHeadings.push(checkbox.parentElement.textContent)
        }
    }
    
    let result = [];
    for(let employee of employees){
        result.push(selectedCells(employee,checkedHeadings));
    }

    let textareaElement = document.getElementById("output");
    textareaElement.value = JSON.stringify(result);

    function employeeObject(row,headingsArr){
        let employee = {};
        let cells = Array.from(row.querySelectorAll("td"));
        let headingsArrCopy = headingsArr.slice(0,headingsArr.length);
        for(let cell of cells){ 
            let heading = headingsArrCopy.shift();
            employee[heading.textContent] = cell.textContent;
        }
        return employee;
    }
    function selectedCells(employee,selectedCells){
        let selectedEmployee = {};
        for(let selected of selectedCells){
            let name = selected.slice(0,selected.length-1).toLowerCase();
            selectedEmployee[name] = employee[selected];
        }
        return selectedEmployee;
    }
}