var express = require( 'express' );
var ejs = require( 'ejs' );
var bodyParser = require( 'body-parser' );
var request = require( 'request' );
var app = express();
app.use( bodyParser.urlencoded( {
	extended: true
} ) );



app.get( '/', function ( req, res ) {
	res.render( 'ajaxRequest.ejs', {
	} );
} );

app.get( '/info', function ( req, res ) {

	var url = "http://api.randomuser.me";
	var data;
	request( url, function ( error, response, body ) {
		if ( !error && response.statusCode == 200 ) {
			data = JSON.parse( body )
	var user = data.results[ 0 ].user
	console.log( user );

	var randomUser = {
		name: user.name.first + "" + user.name.last,
		email: user.email,
		dob: user.dob,
		phone: user.phone,
		SSN: user.SSN,
		imgLink: user.picture.medium
	}
	

		}
		res.send(JSON.stringify(randomUser))
		console.log(randomUser);
	} )


} )

app.listen( 3000 );

console.log( 'listening on port 3000!' );