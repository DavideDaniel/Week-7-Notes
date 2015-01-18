

var button = document.querySelector( "button" )

var movies = [ "Boyhood", "Whiplash", "Nightcrawler", "Gloria", "Gravity",
    "Her", "Skyfall", "The Imitation Game"
]

var movieConstruct = {


}

var counter = 0;
var xhr = new XMLHttpRequest(); //making an object from a constructor

var movieRequest = function () {
    var input = document.querySelector( "input" )
    var img1 = document.getElementById( "i1" )
    var img2 = document.getElementById( "i2" )
    var img3 = document.getElementById( "i3" )
    var description = document.querySelector( "description" )
    var urlArray = [];
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

 
button.addEventListener( "click", function () {

   

    
    

    

    // )

    // var url = "http://omdbapi.com/?t=" + movies[ 0 ]
    movieRequest()
    // console.log(movieRequest());

    // $.each(movies, function(i, val){ 
    //     var url = "http://omdbapi.com/?t=" + val

    //     xhr.open("GET", url)
    // })

    

    

} )

$(document).ready(function (){
    movieRequest();
})

$( ".main" )

    .onepage_scroll( {

        beforeMove: function ( index ) {

            movieRequest();
            // console.log( url )
        },

    direction: "horizontal",
    animationTime:500

    } )