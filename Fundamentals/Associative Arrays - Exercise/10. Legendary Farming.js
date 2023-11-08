function legendaryFarming(string){
    let items = {};
    let keyItems = {"fragments":0,"shards":0,"motes":0};
    let tokens = string.split(" ");
   
    for(let i=1;i<=tokens.length;i+=2){
        let count = Number(tokens[i-1]);
        let name = tokens[i];
        name = name.toLowerCase();
        
        if(name in items || name in keyItems){
            if(name == "shards" || name =="fragments" || name == "motes"){
                keyItems[name] += count;
            }else{
                items[name] += count;
            }
            
            if(name == "shards" && keyItems[name] >= 250){
                keyItems[name] -= 250;
                console.log("Shadowmourne obtained!");
                let keyEntries = Object.entries(keyItems);
                keyEntries.sort((a,b) => a[0].localeCompare(b[0]));
                keyEntries.sort((a,b) => b[1] - a[1]);
                keyItems = Object.fromEntries(keyEntries);
                for(let key in keyItems){
                    console.log(`${key}: ${keyItems[key]}`);
                }

                let entries = Object.entries(items);
                entries.sort((a,b) => a[0].localeCompare(b[0]));
                
                items = Object.fromEntries(entries);
                for(let key in items){
                    console.log(`${key}: ${items[key]}`);
                }
                return;
            }
    
            if(name == "fragments" && keyItems[name] >= 250){
                keyItems[name] -= 250;
                console.log("Valanyr obtained!");
                let keyEntries = Object.entries(keyItems);
                keyEntries.sort((a,b) => a[0].localeCompare(b[0]));
                keyEntries.sort((a,b) => b[1] - a[1]);
                keyItems = Object.fromEntries(keyEntries);
                for(let key in keyItems){
                    console.log(`${key}: ${keyItems[key]}`);
                }

                let entries = Object.entries(items);
                entries.sort((a,b) => a[0].localeCompare(b[0]));
                
                items = Object.fromEntries(entries);
                for(let key in items){
                    console.log(`${key}: ${items[key]}`);
                }
                return;
            }
            if(name == "motes" && keyItems[name] >= 250){
                keyItems[name] -= 250;
                console.log("Dragonwrath obtained!");
                let keyEntries = Object.entries(keyItems);
                keyEntries.sort((a,b) => a[0].localeCompare(b[0]));
                keyEntries.sort((a,b) => b[1] - a[1]);
                keyItems = Object.fromEntries(keyEntries);
                for(let key in keyItems){
                    console.log(`${key}: ${keyItems[key]}`);
                }

                let entries = Object.entries(items);
                entries.sort((a,b) => a[0].localeCompare(b[0]));
                
                items = Object.fromEntries(entries);
                for(let key in items){
                    console.log(`${key}: ${items[key]}`);
                }
                return;
            }

        }else{
            if(name == "shards" || name =="fragments" || name == "motes"){
                keyItems[name] = count;
            }else{
                items[name] = count;
            }
            
            if(name == "shards" && keyItems[name] >= 250){
                keyItems[name] -= 250;
                console.log("Shadowmourne obtained!");
                let keyEntries = Object.entries(keyItems);
                keyEntries.sort((a,b) => a[0].localeCompare(b[0]));
                keyEntries.sort((a,b) => b[1] - a[1]);
                keyItems = Object.fromEntries(keyEntries);
                for(let key in keyItems){
                    console.log(`${key}: ${keyItems[key]}`);
                }

                let entries = Object.entries(items);
                entries.sort((a,b) => a[0].localeCompare(b[0]));
                
                items = Object.fromEntries(entries);
                for(let key in items){
                    console.log(`${key}: ${items[key]}`);
                }
                return;
            }
            if(name == "fragments" && keyItems[name] >= 250){
                keyItems[name] -= 250;
                console.log("Valanyr obtained!");
                let keyEntries = Object.entries(keyItems);
                keyEntries.sort((a,b) => a[0].localeCompare(b[0]));
                keyEntries.sort((a,b) => b[1] - a[1]);
                keyItems = Object.fromEntries(keyEntries);
                for(let key in keyItems){
                    console.log(`${key}: ${keyItems[key]}`);
                }
    
                let entries = Object.entries(items);
                entries.sort((a,b) => a[0].localeCompare(b[0]));
                
                items = Object.fromEntries(entries);
                for(let key in items){
                    console.log(`${key}: ${items[key]}`);
                }
                return;
            }

            if(name == "motes" && keyItems[name] >= 250){
                keyItems[name] -= 250;
                console.log("Dragonwrath obtained!");
                let keyEntries = Object.entries(keyItems);
                keyEntries.sort((a,b) => a[0].localeCompare(b[0]));
                keyEntries.sort((a,b) => b[1] - a[1]);
                keyItems = Object.fromEntries(keyEntries);
                for(let key in keyItems){
                    console.log(`${key}: ${keyItems[key]}`);
                }

                let entries = Object.entries(items);
                entries.sort((a,b) => a[0].localeCompare(b[0]));
                
                items = Object.fromEntries(entries);
                for(let key in items){
                    console.log(`${key}: ${items[key]}`);
                }
                return;
            }

        }
    }
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
)