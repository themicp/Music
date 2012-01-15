<?php
    class Song {
        public static function search( $query ) {
            $API_KEY = "f5f67b8cecd98b2848f4ca2bef9ccb51";

            $query = ( $query == NULL ? "Rammstein" : $query );

            $url = "http://tinysong.com/s/" . urlencode( $query ) . "?format=json&limit=5&key=" . $API_KEY;

            $handler = curl_init();
            curl_setopt( $handler, CURLOPT_URL, $url );
            curl_setopt( $handler, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt( $handler, CURLOPT_CONNECTTIMEOUT, 2);
            $result = curl_exec( $handler );
            curl_close( $handler );

            return json_decode( $result, true );
        }
    }
?>
