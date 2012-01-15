var prevValue = "";
var error = new Boolean();
error = false;
var Song = {
    search: function( term ) {
        $.post( "songs/listing", {
            query: term,
            initial: "false"
        }, function( data ) {
            $( "#songs" ).html( data );
        } );
    },
    player: function( songId ) {
        $.post( "song/" + songId, {
            songid: songId,
            initial: "false"
        }, function( data ) {
            $( "#player" ).html( data );
        } );
    }
}
$( "form" ).submit( function() {
    return false;
} );

function execute( command ) {
    var i, term = "";
    command = command.split( " " );
    command[ 0 ] = command[ 0 ].toLowerCase();
    if ( command[ 0 ] == "search" ) {
        for ( i = 1; i < command.length; ++i ) {
            term += command[ i ] + " ";
        }

        Song.search( term );
    }
    if ( command[ 0 ] == "play" ) {
        command[ 1 ] = command[ 1 ].toLowerCase();
        if ( !( command[ 1 ]*1 > 0 )  ) {
            error = false;
            return false;
        }
        if ( command[ 1 ] > 5 && error == false ) {
            alert( "You must choose a song between 1 and 5." );
            error = true;
            return false;
        }
        Song.player( $( "#songs ol li" )[ command[ 1 ] - 1 ].id );
        error = false;
    }
    if ( command[ 0 ] == "stop" ) {
        Song.player( "0" );
    }
    return false;
}

setInterval( function() {
    var currentValue = $( "#command" ).val();
    if ( prevValue != currentValue ) {
        execute( currentValue );
        prevValue = currentValue;
    }
}, 1000 );

$( "#songs ol li" ).live( "click", function() {
    var songId = this.id;
    
    Song.player( songId );
} );
