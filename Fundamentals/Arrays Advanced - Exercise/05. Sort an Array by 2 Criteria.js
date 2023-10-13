function sortString(arr){
    arr.sort();
    arr.sort((x,y) => x.length - y.length);  
    console.log(arr.join("\n"));
}
sortString(['Isacc',
'Theodor',
'Jack',
'Harrison',
'George']
)