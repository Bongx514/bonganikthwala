<?php
    
    $username = $_POST[ 'username' ];
    $email = $_POST['email'];
    $message = $_POST[ 'message']; 

    $email_subject = "New Message from User: ".$username;
    $to = "bonganithwala514@live.com";
    $from = $email; // add client email
    $email_body = $message ;
    $headers = "From: ".$from; 
    mail($to, $email_subject, $email_body, $headers);
?>