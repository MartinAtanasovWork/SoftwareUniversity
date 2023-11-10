function extractFile(string){
    let arr = string.split("\\");
    let file = arr.pop();
    let fileArr = file.split(".");
    let extension = fileArr.pop();
    console.log(`File name: ${fileArr.join(".")}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.az.pptx')