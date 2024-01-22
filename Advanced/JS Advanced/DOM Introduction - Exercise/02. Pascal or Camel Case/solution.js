function solve() {
    let text = document.getElementById("text").value;
    let namingConvention = document.getElementById("naming-convention").value;
    if(namingConvention == "Pascal Case"){
      let textArr = text.split(" ").map(a => a.toLowerCase());
      let result = "";
      for(let el of textArr){
        result += el[0].toUpperCase() + el.slice(1,el.length);
      }
      document.getElementById("result").textContent = result;
    }else if (namingConvention == "Camel Case"){
      let textArr = text.split(" ").map(a => a.toLowerCase());
      let result = "";
      for(let i=0;i < textArr.length;i++){
        if(i == 0){
          result += textArr[i];
        }else{
          result += textArr[i][0].toUpperCase() + textArr[i].slice(1,textArr[i].length);
        }
      }
      document.getElementById("result").textContent = result;
    }else{
      document.getElementById("result").textContent = "Error!"
    }

}