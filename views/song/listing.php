<?php
    if ( $initial ) {
?>
        <form>
            <input type='text' x-webkit-speech />
        </form>
        <div id='songs'>
<?php
    }
?>
        <ul>
<?php
foreach( $songs as $song ) {
    echo "<li id='" . $song[ 'SongID' ] . "'>" . $song[ 'SongName' ] . "</li>";
}
?>
        </ul>
<?php
    if ( $initial ) {
?>
        </div>
        <div id='player'>
            <object>
                <param name="movie" value="http://listen.grooveshark.com/songWidget.swf">
                <param name="wmode" value="opaque">
                <param name="allowScriptAccess" value="always">
                <param name="flashvars" value="hostname=cowbell.grooveshark.com&amp;songID=29488081&amp;style=metal&amp;p=0">
                <embed src="http://listen.grooveshark.com/songWidget.swf" type="application/x-shockwave-flash" flashvars="hostname=cowbell.grooveshark.com&amp;songID=29488081&amp;style=metal&amp;p=0" allowscriptaccess="always" wmode="opaque">
            </object>
        </div>
<?php
    }
?>
