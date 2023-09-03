//users/art buyers
const buyers = [
    { username: 'artsnob', password: '123', name: 'Judith Featherbottom', address: '101 Fifth Ave NYC'},
    { username: 'banksybaby', password: '2127', name: 'Linda Givers', address: '12 Beatrice Ave Syosset'},
    { username: 'artlover4lyfe', password: '456', name: 'Megan Boczar', address: 'Michegan'}
]

//artwork
const artwork = [
    {name: 'Starry Night', artist: 'Vincent van Gogh', creation_date: '1889', medium: 'oil', subjectId: 5},
    {name: 'Mona Lisa', artist: 'Leonardo da Vinci', creation_date: '1503 - 1519', medium: 'oil', subjectId: 1},
    {name: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', creation_date: '1665', medium: 'oil', subjectId: 1},
    {name: 'Dream caused by the flight of a bee around a pomegrante a second before awakening', artist: 'Salvador Dali', creation_date: '1944', medium: 'resin with oil', subjectId: 6},
    {name: 'Guernica', artist: 'Pablo Picasso', creation_date: '1937', medium: 'oil', subjectId: 2},
    {name: 'No. 14', artist: 'Mark Rothco', creation_date: '1960', medium: 'oil', subjectId: 3},
    {name: 'Number 1 (Lavender Mist)', artist: 'Jackson Pollock', creation_date: '1950', medium: 'resin paint', subjectId: 2}
]

//subjects
const subjects = [
    "Classic (including Renaissance and Baroque)",
    "Modern",
    "Abstract",
    "Impressionism",
    "Surrealism"
]

module.exports = { buyers, artwork, subjects }