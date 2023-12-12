// Manipulating Complex Objects

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    //Add record here
    {
        "artist": "Beau carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube video",
        ]   
    }
]

var hatValue = myMusic[0].artist;
var shirtValue = myMusic[1].artist;

console.log(hatValue);
console.log(shirtValue);