function solve(json){
    let arr = JSON.parse(json);
    let keys = Object.keys(arr[0]);
    console.log("<table>");
    let print = "<tr>";
    for(let el of keys){
        let escaped = console.log(escapeHTML(el));
        //console.log(el," _ ",escaped);
        print += `<th>${escapeHTML(el)}</th>`
    }
    print += "</tr>";
    console.log(print);
    for(let el of arr){
        let print = "   <tr>";
        for(let key of keys){
            print += `<td>${escapeHTML(el[key])}</td>`;
        }
        print += "</tr>"
        console.log(print);
    }
    console.log("</table>");
    function escapeHTML(value){
        value = `${value}`;
        value.split("&").join("&amp;");
        value.split("<").join("&lt;");
        value.split(">").join("&gt;");
        value.split('"').join("&quot;")
        value.split("'").join('&#39;');
        value.split("-").join("&ndash;");
        value.split("—").join("&mdash;");
        value.split("©").join("&copy;");
        value.split("®").join("&reg;")
        return value;
    }
}
solve(`[{"Name":"Pesho",
"Score":4,
"<":8,
"NESHTO":10},
{"Name":"Gosho",
"Score":5,
" Grade":8,
"NESHTO":10},
{"Name":"Angel",
"Score":5.50,
" Grade":10,
"NESHTO":10}]`
)