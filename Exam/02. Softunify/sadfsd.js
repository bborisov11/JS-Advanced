let allSongs = {};
let artist = "pesho";
let song = 'gosho';
let lyrics = "asdfg";
if (!allSongs[artist]) {
    allSongs[artist] = {rate: 0, votes: 0, songs: []}
}

allSongs[artist]['songs'].push(`${song} - ${lyrics}`);
console.log(allSongs)
let asdf = "";