$( "form" ).submit( function() {
    return false;
} );

$( "input[ type=text ]" ).change( function() {
    var query = this.value;
    var i, term = "";
    query = query.split( " " );
    query[ 0 ] = query[ 0 ].toLowerCase();
    if ( query[ 0 ] == "search" ) {
        for ( i = 1; i < query.length; ++i ) {
            term += query[ i ] + " ";
        }
        $.post( "songs/listing", {
            query: term,
            initial: "false"
        }, function( data ) {
            $( "#songs" ).html( data );
        } );
    }
} );

$( "#songs ul li" ).click( function() {
    var songId = this.id;

    $.post( "song/" + songId, {
        songid: songId,
        initial: "false"
    }, function( data ) {
        $( "#player" ).html( data );
    } );
} );
