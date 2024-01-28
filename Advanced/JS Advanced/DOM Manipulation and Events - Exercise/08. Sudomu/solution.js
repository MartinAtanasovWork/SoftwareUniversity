function solve() {
    let [check,clear] = Array.from(document.querySelectorAll("button"));
    let table = document.querySelector("table");
    let resultParagraph = document.querySelector("div#check p");
    let inputs = Array.from(document.querySelectorAll("table tbody tr td input"));
    check.addEventListener("click",checkFn);
    clear.addEventListener("click",clearFn);

    function checkFn(){
        let sodoku  = [];
        for(let i =0;i < inputs.length;i += 3){
            let arr = [];
            arr.push(Number(inputs[i].value));
            arr.push(Number(inputs[i+1].value));
            arr.push(Number(inputs[i+2].value));
            sodoku.push(arr);
        }
        let result = checkSodoku(sodoku);
       
        if(result){
            table.style.border = "2px solid green";
            resultParagraph.textContent = "You solve it! Congratulations!"
            resultParagraph.style.color = "green";
        }else{
            table.style.border = "2px solid red";
            resultParagraph.textContent = "NOP! You are not done yet...";
            resultParagraph.style.color = "red";
        }
    }

    function clearFn(){
        for(let input of inputs){
            input.value = "";
            resultParagraph.textContent = "";
            table.style.border = "";
        }
    }

    function checkSodoku(sodoku){
        let solved = true;
        for(let i =0;i < 3;i++){
            for(let j=0;j < 3;j++){
                for(let a = j+1;a < 3-j;a++){
                    if(sodoku[i][j] == sodoku[i][a]){
                        solved = false;
                    }
                }
                for(let a=i +1;a < 3 - i;a++){
                    if(sodoku[i][j] == sodoku[a][j]){
                        solved = false;
                    }
                }
            }
        }
        return solved;
    }
}