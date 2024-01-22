function solve() {
  let text = document.getElementById("input").value;
  let sentances = text.split(".");
  sentances[sentances.length -1] == "" ? sentances.pop() : true;
  let output = "";
  console.log(sentances);
  if(sentances.length < 3){
    for(let sen of sentances){
      output += sen + ".";
    }
    let p = document.createElement("p");
    p.textContent = output;
    document.getElementById("output").appendChild(p);
  }else{
    let index = 0;
    while(sentances.length > 0){
      index++;
      let sentance = sentances.shift();
      output += sentance + ".";
      if(index % 3 == 0){
        let p = document.createElement("p");
        p.textContent = output;
        document.getElementById("output").appendChild(p);
        index = 0;
        console.log(output);
        output = "";
      }
    }
    if(output != ""){
      let p = document.createElement("p");
      p.textContent = output;
      document.getElementById("output").appendChild(p);
    }
  }
}