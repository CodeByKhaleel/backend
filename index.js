const express = require('express')
const app = express()
const PORT = 3000
const Data = [{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
}]
const youtubeLink = "https://www.youtube.com/watch?v=7fjOw8ApZ1I&t=13929s"
app.get('/', (req, res) => {
    res.send("learning")
})

app.get('/youtube', (req, res) => {
    res.links(youtubeLink)
})
app.listen(process.env.PORT, () => {
    console.log("listening on port 4000")
})