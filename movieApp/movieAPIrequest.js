var movies = [ "Boyhood", "Whiplash", "Nightcrawler", "Gloria", "Gravity",
    "Her", "Skyfall", "The Imitation Game", "Kill Bill: Vol. 1",
    "Kill Bill: Vol. 2"
]


// For Server
// ==========

var movieDB = [];

var movieObj = function ( title, actors, director, imdbRating, poster, plot ) {
    this.title = title
    this.actors = actors
    this.director = director
    this.imdbRating = imdbRating
    this.poster = poster
    this.plot = plot
}

var counter = 0;
var xhr = new XMLHttpRequest(); //making an object from a constructor
var loadMovie = function() {
    xhr.addEventListener( 'load', function ( e ) {
    var img1 = document.getElementById( "i1" )
    var img2 = document.getElementById( "i2" )
    var img3 = document.getElementById( "i3" )

    var d = xhr.responseText //comes in in JSON so you will have to parse it
    var parsed = JSON.parse( d );
    // console.log( parsed );

    // posterDisplay( parsed )
    // img1.src = parsed.Poster;
    // img2.src = parsed.Poster;
    // img3.src = parsed.Poster;

    // description.innerText = parsed.Plot;
    
    var movie = new movieObj(parsed.Title, parsed.Actors, parsed.Director, parsed.imdbRating, parsed.Poster, parsed.Plot);
    movieDB.push(movie)
    
    // while( counter >= movies.length)
    movieDB.forEach(function (movie) {
        if (parsed.Title === movie.title){
        movieDB.splice(movie[counter], 1)
    }})
    console.log(movieDB);
} )
}
loadMovie();


// function posterDisplay = function (movie, div){
//     var url = " http://omdbapi.com/?t=" + movie;
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.addEventListener('load',function(e){
//         var d = xhr.responseText;
//         var parsed = JSON.parse(d);
//         $(div).attr('src', parsed.Poster)
//     });
//     xhr.send();
// };


var posterDisplay = function ( parsed ) {
    $( "img" )
        // .each( function () {
            $( this )
                .attr( "src", parsed.Poster )
        // } )
}

var movieRequest = function () {
    var input = document.querySelector( "input" )
    var description = document.querySelector( "description" )

    var urlArray = [];
    var url = "http://omdbapi.com/?t=" + movies[ counter ]

    xhr.open( "GET", url );
    console.log( url );

    xhr.send();
    counter++
    while ( counter >= movies.length ) {
        counter = 0;
    }

    console.log( counter );
}

$( document )
    .ready( function () {
        // $(movies).each(movieRequest());
        // movies.forEach( function () {
            movieRequest();
        // } )
    } )

$( ".main" )

.onepage_scroll( {

    beforeMove: function ( index ) {
        movieRequest();
    },

    direction: "horizontal",
    easing: "ease-in",
    animationTime: 1000

} )

$( "img" )
    .click( function () {
        alert()
        $( "nav" )
            .addClass( "showInfo" )

    } )

$( "section" )
    .next(

        posterDisplay()
 )

