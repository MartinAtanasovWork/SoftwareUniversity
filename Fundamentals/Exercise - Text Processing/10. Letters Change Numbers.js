function letterChangeNumber(str){
        let words = str.split(" ").filter(a => a.length > 0);
        let alphabet = alphabetObject = {
            'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
            'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
            'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
          };
          let sum = 0;
          
        for(let word of words){
            let tokens = word.split("");
            let first = tokens.shift();
            let last = tokens.pop();
            let num = Number(tokens.join(""));
            if(first == first.toLowerCase()){
                let operand = alphabet[[first.toLowerCase()]];
                num *= operand;
               
            }else{
                let operand = alphabet[[first.toLowerCase()]];
                num /= operand;
               
            }
    
            if(last == last.toLowerCase()){
                let operand = alphabet[[last.toLowerCase()]];
                num += operand;
               
            }else{
                let operand = alphabet[[last.toLowerCase()]];
                num -= operand;
               
            }
            sum+=num;
           
        }    
        console.log(sum.toFixed(2));
    }
       
letterChangeNumber('P34562Z q2576f  H456z');