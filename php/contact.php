<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if (isset($_POST['submit'])) {

} else {
	header('location: ../index');
	exit(0);
}

$to = 'brmendez@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

// mail("brmendez@gmail.com","My subject",$msg,$headers);

?>
