export async function request(url,options){
    try {
        let req = await fetch(url,options);

        if(!req.ok){
            let error = await req.json();
            throw new Error(error.message);
        }

        let data = await req.json();
        return data; 
    } catch (error) {
        alert(error.message);
    }
}