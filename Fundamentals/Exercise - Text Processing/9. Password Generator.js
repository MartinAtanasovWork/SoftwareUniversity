function passwordGenerator(arr){
    let password = (arr[0] + arr[1]).split("");
    let replacements = arr[2].split("");
    let index = 0;
    for(let i=0;i < password.length;i++){
        let lowercaseVowels = ['a', 'e', 'i', 'o', 'u'];
        if(lowercaseVowels.includes(password[i])){
            password[i] = (replacements[index]).toUpperCase();
            index++;
            if(index > replacements.length-1){
                index = 0;
            }
        }
    }
    console.log(`Your generated password is ${password.reverse().join("")}`);
}
passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
    ]
    )