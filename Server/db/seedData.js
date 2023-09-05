//users/art buyers
const buyers = [
    { username: 'artsnob', password: '123', name: 'Judith Featherbottom', address: '101 Fifth Ave NYC'},
    { username: 'banksybaby', password: '2127', name: 'Linda Givers', address: '12 Beatrice Ave Syosset'},
    { username: 'artlover4lyfe', password: '456', name: 'Megan Boczar', address: 'Michegan'}
]

//artwork
const artwork = [
    {name: 'Starry Night', artist: 'Vincent van Gogh', creation_date: '1889', medium: 'oil', subjectsId: 4},
    {name: 'Mona Lisa', artist: 'Leonardo da Vinci', creation_date: '1503 - 1519', medium: 'oil', subjectsId: 1},
    {name: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', creation_date: '1665', medium: 'oil', subjectsId: 1},
    {name: 'Dream caused by the flight of a bee around a pomegrante a second before awakening', artist: 'Salvador Dali', creation_date: '1944', medium: 'resin with oil', subjectsId: 5},
    {name: 'Guernica', artist: 'Pablo Picasso', creation_date: '1937', medium: 'oil', subjectsId: 2},
    {name: 'No. 14', artist: 'Mark Rothco', creation_date: '1960', medium: 'oil', subjectsId: 3},
    {name: 'Number 1 (Lavender Mist)', artist: 'Jackson Pollock', creation_date: '1950', medium: 'resin paint', subjectsId: 2}
]

//subjects
const subjects = [
    { Classic: true, Modern: false, Abstract: false, Impressionism: false, Surrealism: false },
    { Classic: false, Modern: true, Abstract: false, Impressionism: false, Surrealism: false },
    { Classic: false, Modern: false, Abstract: true, Impressionism: false, Surrealism: false },
    { Classic: false, Modern: false, Abstract: false, Impressionism: true, Surrealism: false },
    { Classic: false, Modern: false, Abstract: false, Impressionism: false, Surrealism: true }
]

module.exports = { buyers, artwork, subjects }