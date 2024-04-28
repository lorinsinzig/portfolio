<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailheader = "From: $name \r\n";

$recipient = "sinzig.lorin@gmail.com";

mail($recipient, $message, $mailheader) or die("Error!");

?>