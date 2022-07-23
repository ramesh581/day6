class Movie  {
    constructor(title,studio,rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(array) {
        let PG_Movies = array.filter((movie) => {
            if (movie.rating == "PG") {
                return true;
            }
        })
        console.log(PG_Movies);
    }


}


let Movies = [
    {title: "Cinderella",studio:"Disney",rating:"G"},
    {title: "Avengers",studio: "Marvel",rating:"PG"},
    {title: "The Lord of the Rings",studio:"HBO",rating:"pg13"},
    {title: "Wildlife",studio: "Broadway",rating:"PG"},
    {title: "Troy",studio:"Warner Bro.",rating:"R"},
    {title: "300",studio: "Fox Studios",rating:"NC-17"},
];


let film = new Movie("Casino Royale","Eon Productions","PG13");

film.getPG(Movies);