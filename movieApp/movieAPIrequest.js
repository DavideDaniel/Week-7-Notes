var button = document.querySelector( "button" )

var counter = 0;



button.addEventListener( "click", function () {
    var movies = [ "Boyhood", "Whiplash", "Nightcrawler", "Gloria", "Gravity",
        "Her", "Skyfall", "The Imitation Game"
    ]

    
    var input = document.querySelector( "input" )
    var img = document.querySelector( "img" )
    var description = document.querySelector( "description" )
    var xhr = new XMLHttpRequest(); //making an object from a constructor

    var movieRequest = function () {
        
            var url = "http://omdbapi.com/?t=" + movies[counter]
                xhr.open( "GET", url );
        // };


        // movies.forEach( function ( movie ) {
        //         var url = "http://omdbapi.com/?t=" + movie
        //         xhr.open( "GET", url );

            }

        // )
    


    // var url = "http://omdbapi.com/?t=" + movies[ 0 ]
    movieRequest()
    // console.log(movieRequest());

    // $.each(movies, function(i, val){ 
    //     var url = "http://omdbapi.com/?t=" + val

    //     xhr.open("GET", url)
    // })
    
    xhr.addEventListener( 'load', function ( e ) {
        var d = xhr.responseText //comes in in JSON so you will have to parse it
        var parsed = JSON.parse( d );
        console.log( parsed );

        img.src = parsed.Poster;
        description.innerText = parsed.Plot;

    } )
    xhr.send();
    
    counter++

} )