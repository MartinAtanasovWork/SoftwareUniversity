function sequence(arr){
    let sequence = [];
    let highestSequence = [];
    let prevEl= -1;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == prevEl){
            sequence.push(arr[i]);
            prevEl = arr[i];
        }else{
            prevEl = arr[i];
            sequence = [prevEl];
            
        }
        if(sequence.length > highestSequence.length){
            highestSequence = sequence;
        }

    }
   console.log(highestSequence.join(" "));
 }
sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])