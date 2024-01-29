function solution(){
    let string = {str:"",
     append(add){
        this.str = this.str + add;
    },
    removeStart(n){
        let newStr = "";
        for(let i=n;i < this.str.length;i++){
            newStr += this.str[i];
        }
        this.str = newStr;
    },
    removeEnd(n){
        let newStr = "";
        for(let i=0;i < this.str.length - n;i++){
            newStr += this.str[i];
        }
        this.str = newStr;
    },
    print(){
        console.log(this.str);
    }};
    return string;
}
let firstZeroTest = solution();
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
