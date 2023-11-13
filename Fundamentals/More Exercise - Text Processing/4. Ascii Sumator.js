function asciiSumator(arr){
    let first = arr.shift().charCodeAt();
    let second = arr.shift().charCodeAt();
    let string = arr[0];
    let sum = 0;
    let smaller = Math.min(first,second);
    let bigger = Math.max(first,second);
    for(let i=0;i < string.length;i++){
        if(string[i].charCodeAt() < bigger && string[i].charCodeAt() > smaller){
            sum += string[i].charCodeAt()
        }
    }
    console.log(sum);
}
asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$'
]
)