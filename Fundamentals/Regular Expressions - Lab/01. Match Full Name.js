function matchFullName(string){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;

    let validNames = [];
    let validName = pattern.exec(string);
    while(validName !== null){
        validNames.push(validName[0]);
        validName = pattern.exec(string);
    }
    console.log(validNames.join(" "));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov");