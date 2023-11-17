function matchDates([string]){
    let pattern = /(?<day>\d{2})([\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/gm;
    let date = pattern.exec(string);
    while(date !== null){
        let {day,month,year} = date.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        date = pattern.exec(string);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016']
)