document.getElementById('searchButton').addEventListener('click',searchMovie);

let api_key = 'f60c81d86f7ad6da04eff9e5c871c7ba';
let url_base = 'https://api.themoviedb.org/3/search/movie';
let url_img = 'https://image.tmdb.org/t/p/w200';
let resultConteiner = document.getElementById('results');

function searchMovie(){
    resultConteiner.innerHTML ='Cargando...';
    let searchInput = document.getElementById('searchInput').value;
    fetch(`${url_base}?api_key=${api_key}&query=${searchInput}`)
    .then (response => response.json())
    .then (response => displayMovie(response.results));
}

function displayMovie(movie){

    
    resultConteiner.innerHTML ='';

    if (movie.length === 0){
        resultConteiner.innerHTML = '<p> No se encontraron resultados para tu busqueda</p>';

        return;
    }

    movie.forEach(movie => {

        let movieDiv = document.createElement ('div');
        movieDiv.classList.add('movie');

        let title = document.createElement ('h2');
        title.textContent = movie.title;

        let releaseDate = document.createElement ('p');
        releaseDate.textContent = 'La fecha de lansamiento fue: '+movie.release_date;

        let overview = document.createElement ('p');
        overview.textContent = movie.overview;

        let posterPath = url_img + movie.poster_path;
        let poster = document.createElement('img');
        poster.src = posterPath;

        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overview);
        
        resultConteiner.appendChild(movieDiv);


        
    });
    
}   