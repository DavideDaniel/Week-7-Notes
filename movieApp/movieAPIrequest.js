
var button = document.querySelector( "button" )

var movies = [ "Boyhood", "Whiplash", "Nightcrawler", "Gloria", "Gravity",
        "Her", "Skyfall", "The Imitation Game"
    ]

var counter = 0;





button.addEventListener( "click", function () {
    
while (counter >= movies.length){
    counter = 0;
}
    
    var input = document.querySelector( "input" )
    var img1 = document.getElementById( "i1" )
    var img2 = document.getElementById( "i2" )
    var img3 = document.getElementById( "i3" )
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

        img1.src = parsed.Poster;
        img2.src = parsed.Poster;
        img3.src = parsed.Poster;
        description.innerText = parsed.Plot;

    } )
    xhr.send();
    
    counter++

} )


  $(window).scroll(function(){
    console.log("scroll")
    movieRequest();
    console.log(url)
  })

