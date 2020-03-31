async function showMovies() {
    let response = await fetch(`https://milesl19.github.io/csce242/HomePage/json/movies.json`);
    let moviesJSON = await response.json();
    let movieDiv = document.getElementById("movie-section");

    //Looping to get movies
    for (i in moviesJSON) {
        let movie = moviesJSON[i];
        movieDiv.append(getMovieItem(movie));
    }
}

function getMovieItem(movie) {
    let movieSection = document.createElement("section");

    let divPic = document.createElement("div");
    let image = document.createElement("img");
    image.src = `images/${movies.img}`;
    divPic.append(image);
    movieSection.append(divPic);

    let h2Elem = document.createElement("h2");
    h2Elem.innerText = `${movie.title}`;
    movieSection.append(h2Elem);

    let ulElem = document.createElement("ul");
    movieSection.append(ulElem);

    let liDirector = document.createElement("li");
    liDirector.innerText = `Director: ${movie.director}`;
    ulElem.append(liBrand);

    let liActors = document.createElement("li");
    liActors.innerText = `Actors: ${movie.actors}`;
    ulElem.append(liActor);

    let liYear = document.createElement("li");
    liYear.innerText = `Years: ${movie.year}`;
    ulElem.append(liYear);

    let liGenre = document.createElement("li");
    liGenre.innerText = `Genres: ${movie.genres}`;
    ulElem.append(liGenre);

    let liDescription = document.createElement("li");
    liDescription.innerText = `${movie.description}`;
    ulElem.append(liDescription);

    return movieSection;
}


    window.onload = function() {
        this.showMovies();
}