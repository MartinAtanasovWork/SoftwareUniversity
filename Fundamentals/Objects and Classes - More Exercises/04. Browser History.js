function solve(history,commands){
    let arr = [1,2,3];
    
    for(let el of commands){
        let [command,name] = el.split(" ");

        if(command == "Close"){
            let arr = history["Open Tabs"];
            let newArr = [];
            for(let tab of arr){
                if(tab != name){
                    newArr.push(tab);
                }
            }
            history["Open Tabs"] = newArr;

            history["Recently Closed"].push(name);
            history["Browser Logs"].push(el);
        }else if(command == "Open"){
            if(!history["Open Tabs"].includes(name)){
                history["Open Tabs"].push(name);
            }
            history["Browser Logs"].push(el);
        }else if(el == "Clear History and Cache"){
            history["Open Tabs"] = [];
            history["Recently Closed"] = [];
            history["Browser Logs"] = [];
        }       
    }

    console.log(history["Browser Name"]);
    let opentabs = [];
    for(let el of history["Open Tabs"]){
        opentabs.push(el);
    }
    console.log(`Open Tabs: ${opentabs.join(", ")}`);
    let recentlyclosed = [];
    for(let el of history["Recently Closed"]){
        recentlyclosed.push(el);
    }
    console.log(`Recently Closed: ${recentlyclosed.join(", ")}`);
    let browserlogs = [];
    for(let el of history["Browser Logs"]){
        browserlogs.push(el);
    }
    console.log(`Browser Logs: ${browserlogs.join(", ")}`);
}
solve({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google","Open Google"]


)