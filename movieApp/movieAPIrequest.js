

var button = document.querySelector( "button" )

var movies = [ "Boyhood", "Whiplash", "Nightcrawler", "Gloria", "Gravity",
    "Her", "Skyfall", "The Imitation Game"
]

var counter = 0;
var xhr = new XMLHttpRequest(); //making an object from a constructor

var movieRequest = function () {
    var input = document.querySelector( "input" )
    var img1 = document.getElementById( "i1" )
    var img2 = document.getElementById( "i2" )
    var img3 = document.getElementById( "i3" )
    var description = document.querySelector( "description" )
    var url = "http://omdbapi.com/?t=" + movies[ counter ]
    xhr.open( "GET", url );
        console.log(url);
xhr.addEventListener( 'load', function ( e ) {
        var d = xhr.responseText //comes in in JSON so you will have to parse it
        var parsed = JSON.parse( d );
        // console.log( parsed );

        img1.src = parsed.Poster;
        img2.src = parsed.Poster;
        // img3.src = parsed.Poster;
        description.innerText = parsed.Plot;

    } )
    xhr.send();
    counter++
        while ( counter >= movies.length ) {
        counter = 0;
    }

        
        console.log(counter);
    }


$(document).ready(function (){
    movieRequest();
})

$( ".main" ).click(function(){
    movieRequest()})

    // .onepage_scroll( {

    //     // afterScroll: function ( index ) {

    //     //     movieRequest();
    //     //     // console.log( url )
    //     // },

    // direction: "horizontal"

    // } )
    // .scroll(function() {
    //   movieRequest()
    // })