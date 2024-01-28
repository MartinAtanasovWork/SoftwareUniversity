function encodeAndDecodeMessages() {
    let [encode,decode] = Array.from(document.querySelectorAll("main#main div textarea"));
    let [encodeButton,decodeButton] = Array.from(document.querySelectorAll("main#main div button"));

    encodeButton.addEventListener("click",encodeFunc);
    decodeButton.addEventListener("click",decodeFunc);

    function encodeFunc(){
        let message = encode.value;
        let newMessage = "";
        for(let i=0;i < message.length;i++){
            newMessage += String.fromCharCode(message[i].charCodeAt() + 1);
        }
        decode.value = newMessage;
        encode.value = "";
    }

    function decodeFunc(){
        let message = decode.value;
        let decodedMessage = "";
        for(let i=0;i < message.length;i++){
            decodedMessage += String.fromCharCode(message[i].charCodeAt() - 1);
        }
        decode.value = decodedMessage;
    }
}