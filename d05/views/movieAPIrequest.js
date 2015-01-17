var button = document.querySelector( "button" )
button.addEventListener( "click", function () {
    var movies = [ "Boyhood", "Whiplash", "Nightcrawler", "Gloria", "Gravity",
        "Her", "Skyfall", "The Imitation Game"
    ]

    var input = document.querySelector( "input" )
    var img = document.querySelector( "img" )
    var description = document.querySelector( "description" )
    var xhr = new XMLHttpRequest(); //making an object from a constructor

    // var urled = encodeURI(array[0]);
    function movieRequest = function(){
        movies.forEach(function(movie){
            var url = "http://omdbapi.com/?t=" + movie        
        })
    }
    // var url = "http://omdbapi.com/?t=" + movies[ 0 ]

    xhr.open( "GET", movieRequest() );
    console.log(movieRequest());
    xhr.addEventListener( 'load', function ( e ) {
        var d = xhr.responseText //comes in in JSON so you will have to parse it
        var parsed = JSON.parse( d );
        console.log( parsed );

        img.src = parsed.Poster;
        description.innerText = parsed.Plot;

    } )

    xhr.send();

} )