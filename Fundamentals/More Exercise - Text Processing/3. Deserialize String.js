function deserializingString(arr){
    let string = [];
    arr.pop();
    for(let el of arr){
        let [letter,indexes] = el.split(":");
         indexes = indexes.split("/");
         for(let el of indexes){
            string[el] = letter;
         }
      }
      console.log(string.join(""));
}
deserializingString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']
)