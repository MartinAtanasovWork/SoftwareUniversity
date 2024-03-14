import { request } from "./request.js";

function startTheme(event,id){
    window.location = "theme-content.html"
    main(id);
}



function main(id){
    loadPageInfo(id);
}

async function loadPageInfo(postId){
    let url = "http://localhost:3030/jsonstore/collections/myboard/posts"
    let data = await request(url);
    let post = data[postId];
    console.log(post);
    console.log(info);
}

export{
   startTheme
}