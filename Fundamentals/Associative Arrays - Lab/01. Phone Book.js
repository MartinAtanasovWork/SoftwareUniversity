function phoneBook(arr){
    let phonebook = {};
    for(let i=0;i < arr.length;i++){
        let [name,phone] = arr[i].split(" ");
        phonebook[name] = phone;
    }
    for(let [key,value] of Object.entries(phonebook)){
        console.log(key,"->",value);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)