export async function request(endpoint,options){
    let url = `http://localhost:3030${endpoint}`;

    try {
        let req = await fetch(url,options);
        if(!req.ok){            
            let error = await req.json();
            throw new Error(error.message); 
        }
        let data; 
        if(req.status != 204){
            data = await req.json();
        }else{
            data = {};
        }        
        return data;
    } catch (error) {
        alert(error.message);
    }
}