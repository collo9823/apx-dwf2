class Song{
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }
    getName(){
        return this.nombre;
    }
}

class Album {
    nombre: string;
    songs: Song[];
    constructor(nombre: string, songs: Song[]){   
        this.nombre = nombre;
        this.songs = songs
    }
    addSongs(name:Song){
        console.log(["NOMBRE SONG"],name)
        return this.songs.push(name)
    }
    getSongs(){
        return this.songs;
    }
}

class Banda{
    members:string[];
    albums:Album[];
    constructor(members:string[], albums:Album[]){
        this.members = members;
        this.albums = albums;
    }
}

function main(){
    const unSong = new Song('primerTema');
    const dosSong = new Song('segundoTema');
    const tresSong = new Song('tercerTema');
    const unAlbum = new Album('primerAlbum', [unSong])
    const unaBanda = new Banda(["Leo1"], [unAlbum])
    
    unAlbum.addSongs(dosSong)
    unaBanda.albums[0].addSongs(tresSong)
    console.log(unaBanda)
    console.log(unSong.getName())
    console.log(unAlbum)
    console.log(["getSongs"],unAlbum.getSongs())
    // console.log(unaBanda.albums[0].songs)
    // console.log()
}

main()