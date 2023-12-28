let assArr = {"az":{"a":7, "b":2},"ba":{"a":10, "b":3}};

// Sort based on the count of 'a' in descending order
let sortedKeys = Object.keys(assArr).sort((a, b) => assArr[b].a - assArr[a].a);

// Access the values in the sorted order
for (let key of sortedKeys) {
    console.log(key, assArr[key]);
}