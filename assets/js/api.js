let latestMovies = document.getElementById('latest_Movies')
// fetch series 

fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=d205d64878c81c3c0c7f36bae956a2e7')
	.then(response => response.json())
	.then(json => {
	    let results = json.results
	    let result = 0
		let title = results[result].name
		let overview = results[result].overview
		let poster1 = "https://image.tmdb.org/t/p/w500"+results[0].poster_path
		let poster2 = "https://image.tmdb.org/t/p/w500"+results[1].poster_path

})

// Banner Movies
fetch('https://api.themoviedb.org/3/tv/popular?api_key=d205d64878c81c3c0c7f36bae956a2e7')
	.then(response => response.json())
	.then(json => {
	    let results = json.results
	    for (let result=0; result<3; result++){
		let rate = results[result].vote_average
		let title = results[result].name
		let overview = results[result].overview
		let poster = "https://image.tmdb.org/t/p/w500"+results[result].poster_path
		console.log(poster)
		let bannerContainer = document.getElementById('bannerMovies')
		if(result == 0){
bannerContainer.innerHTML +=`
<div class="item">
	<li>
		<div class="slider-info mid-view bg bg1" style='background: url(${poster}) no-repeat center;'>
			<div class="container">
				<div class="mid-info">
					<span class="sub-text">${rate}</span>
					<h3>${title}</h3>
					<p>${overview}</p>
					<a class="watch"><span class="fa fa-play"
							aria-hidden="true"></span>
						Watch Trailer</a>
				</div>
			</div>
		</div>
	</li>
</div>`} else {
	bannerContainer.innerHTML +=`
<div class="item">
	<li>
		<div class="slider-info mid-view mid-top${result} bg bg2" style='background: url(${poster}) no-repeat center;'>
			<div class="container" >
				<div class="mid-info">
					<span class="sub-text">${rate}</span>
					<h3>${title}</h3>
					<p>${overview}</p>
					<a class="watch" ><span class="fa fa-play"
							aria-hidden="true"></span>
						Watch Trailer</a>
				</div>
			</div>
		</div>
	</li>
</div>`
}
	    }
	})
//Popular Movies
let popularContainer = document.getElementById('popularMovies')
fetch('https://api.themoviedb.org/3/movie/popular?api_key=d205d64878c81c3c0c7f36bae956a2e7')
	.then(response => response.json())
	.then(json => {
		let results = json.results
		for (let i=4; i<8; i++){
		let title = results[i].title
		let poster = results[i].poster_path
		let voteCount = results[i].vote_count
popularContainer.innerHTML +=`
<div class="item vhny-grid">
	<div class="box16">
		<a >
			<figure>
				<img class="img-fluid" src="https://image.tmdb.org/t/p/w500${poster}" alt="">
			</figure>
			<div class="box-content">
				<h3 class="title">${title}</h3>
				<h4> <span class="post"><span class="fa fa-heart"> </span> Vote :${voteCount}
					</span>
					
				</h4>
			</div>
			<span class="fa fa-play video-icon" aria-hidden="true"></span>
		</a>
	</div>
</div>`
		}	
})

// Trending Movies
let trendingContainer = document.getElementById('trendingMovies')
fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=d205d64878c81c3c0c7f36bae956a2e7')
	.then(response => response.json())
	.then(json => {
		let results = json.results
		for (let result in results){
		let title = results[result].title
		let poster = results[result].poster_path
		let release = results[result].release_date
		let type = results[result].media_type
trendingContainer.innerHTML +=`
<div class="item vhny-grid">
	<div class="box16 mb-0">
		<a >
			<figure>
				<img class="img-fluid" src="https://image.tmdb.org/t/p/w500${poster}" alt="">
			</figure>
			<div class="box-content">
				<h4> <span class="post"><span class="fa fa-tv"> </span> ${type}
					</span>
					<span class="post fa fa-heart text-right"></span>
				</h4>
			</div>
			<span class="fa fa-play video-icon" aria-hidden="true"></span>
		</a>
	</div>
	<h3> <a class="title-gd" href="genre.html">${title}</a></h3>
	<p>${release}</p>
	
</div>
`
		}
	})

	//searching Movies
const searchBtn = document.getElementById('searchBtn')

const searchedContainer = document.getElementById('searchedMovies')
const API = () => {
searchedContainer.innerHTML = ''
const searchTitle = document.getElementById('searchInput').value; 
const apiUrl = ``
      fetch(`https://omdbapi.com/?s=${searchTitle}&page=1&apikey=ea8bd4d3`)
        .then(response => response.json())
        .then(json => {
console.log(json.Search[0].Title)
          // Process the API response
      if (json.Response === 'True') { 
const results = json.Search
console.log(results)
for (let result in results){
let poster = results[result].Poster
let title = results[result].Title
let year = results[result].Year
let type = results[result].Type
    searchedContainer.innerHTML += `
    <div class="item vhny-grid">
	<div class="box16 mb-0">
		<a >
			<figure>
				<img class="img-fluid" src="${poster}" alt="">
			</figure>
			<div class="box-content">
				<h4> <span class="post"><span class="fa fa-tv"> </span> ${type}
					</span>
					<span class="post fa fa-heart text-right"></span>
				</h4>
			</div>
			<span class="fa fa-play video-icon" aria-hidden="true"></span>
		</a>
	</div>
	<h3> <a class="title-gd" id='movieDetail' >${title}</a></h3>
	<p>${year}</p>
	
</div>`
}
          } else {
            // Movie not found or error occurred
            const searchResultsDiv = document.getElementById('searchResults');
            searchResultsDiv.innerHTML = `<p>Movie not found</p>`;
          }
        })
        .catch(error => {
          // Handle any errors
          console.log('Error occurred:', error);
        });
 };
searchBtn.addEventListener('click',API)

// movie Detail
let movieDetail = document.querySelectorAll('#movieDetail')
movieDetail.forEach((movie) => { card.addEventListener('click', handleClick); });

function handleClick(event) {
  // Extract data from the clicked movie card
  const movieTitle = event.currentTarget.dataset.title;
  const movieId = event.currentTarget.dataset.id;

  // Generate the URL for the "about.html" page, including the data as parameters
  const aboutPageUrl = `about.html?title=${encodeURIComponent(movieTitle)}&id=${encodeURIComponent(movieId)}`;

  // Navigate to the "about.html" page
  window.location.href = aboutPageUrl;
}
