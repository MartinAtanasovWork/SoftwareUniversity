function converToOJSON(name,lastName,hairColor){
    let obj = {"name":name,"lastName":lastName,"hairColor":hairColor}
    console.log(JSON.stringify(obj));
}
converToOJSON("a","b","c")