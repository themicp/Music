<?php
    class SongController {
        public static function listing( $query, $initial = "true" ) {
            $songs = Song::Search( $query );

            $initial = ( $initial == 'true' || $initial == NULL ? true : false );
            view( 'song/listing', compact( 'songs' ), $initial );
        }
        public static function view( $songid, $initial = "true" ) {
            $initial = ( $initial == 'true' || $initial == NULL ? true : false );
            view( 'song/view', compact( 'songid' ), $initial );
        }
    }
?>
