type Musics = {
    id: String,
    name: String,
    image: String,
    url: String,
    duration: number //seconds

}


const musics: Musics[] = [
    {
        id: "1",
        name: "Pelo Amor de Deus, Tim Maia",
        image: "https://res.cloudinary.com/myuploads/image/upload/v1622766806/Portfolio/peloamordedeus_vcy248.webp",
        url: "https://storage.googleapis.com/audios_for_portfolio/peloamordedeus.mp3",
        duration: 184 
    },
    {
        id: "2",
        name: "Mistério do Planeta, Novos Baianos",
        image: "https://res.cloudinary.com/myuploads/image/upload/v1622766910/Portfolio/misteriodoplaneta_gj2obj.jpg",
        url: "https://storage.googleapis.com/audios_for_portfolio/misteriodoplaneta.mp3",
        duration: 221 
    },
    {
        id: "3",
        name: "A Day In The Life, Beatles",
        image: "https://res.cloudinary.com/myuploads/image/upload/v1622769625/Portfolio/adayinthelife_jckd7p.jpg",
        url: "https://storage.googleapis.com/audios_for_portfolio/adayinthelife.mp3",
        duration: 323 
    },
    {
        id: "4",
        name: "Jamming, Bob Marley",
        image: "https://res.cloudinary.com/myuploads/image/upload/v1622770258/Portfolio/jamming_ido2i2.png",
        url: "https://storage.googleapis.com/audios_for_portfolio/jamming.mp3",
        duration: 200 
    },
    {
        id: "5",
        name: "Menina Mulher Da Pele Preta, Jorge Ben Jor",
        image: "https://res.cloudinary.com/myuploads/image/upload/v1622770259/Portfolio/meninamulherdapelepreta_yfxlb5.jpg",
        url: "https://storage.googleapis.com/audios_for_portfolio/meninamulherdapelepreta.mp3",
        duration: 177 
    },
    {
        id: "6",
        name: "All Of My Love, Led Zeppelin",
        image: "https://res.cloudinary.com/myuploads/image/upload/v1622907262/Portfolio/allofmylove_eaeooy.jpg",
        url: "https://storage.googleapis.com/audios_for_portfolio/allofmylove.mp3",
        duration: 355
    },
    {
        id: "7",
        name: "Barravenida, Pt.2, Baiana System",
        image: "https://res.cloudinary.com/myuploads/image/upload/v1626196585/Portfolio/barraavenida_di5ow7.webp",
        url: "https://storage.googleapis.com/audios_for_portfolio/barraavenidapt2.mp3",
        duration: 393
    },
]

export default musics;