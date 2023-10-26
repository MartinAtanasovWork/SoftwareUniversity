function songs(arr){

    class Song{
        constructor(album,name,time){
            this.album = album;
            this.name = name;
            this.time = time;
        }
        isInAlbum(album){
            if(this.album == album || album == "all"){
                return true;
            }
            return false;
        }
    }

    let songs = arr.shift();
    let searchAlbum = arr.pop(); 
    let print = [];
    for(let i=0;i < arr.length;i++){
        let song = arr[i].split("_");
        let album = song[0];
        let name = song[1];
        let time = Number(song[2]);
        let currentSong = new Song(album,name,time);
        if(currentSong.isInAlbum(searchAlbum)){
            console.log(currentSong.name);
        };
    }
  
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )