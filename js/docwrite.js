<?php
if (isset($_GET['BLA'])){
	
	echo 'alert("BLA"); document.write("BLA<br/>")';
		
} else {

	sleep( $_GET['sleep'] );
	$alert = $_GET['alert'];
	
	echo <<<HEREDOC
	alert("{$alert}");
	document.write("{$alert}<br/>")
HEREDOC;
}
?>