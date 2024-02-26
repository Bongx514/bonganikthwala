<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $username = htmlspecialchars($_POST['username']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    // Check if inputs are valid
    if ($username && $email && $message) {
        $email_subject = "New Message from User: " . $username;
        $to = "bonganithwala514@live.com";
        $from = $email;
        $email_body = "From: $username\n\nEmail: $email\n\nMessage:\n$message";

        // Set additional headers
        $headers = "From: $from\r\n";
        $headers .= "Reply-To: $from\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Send email
        if (mail($to, $email_subject, $email_body, $headers)) {
            header("Location: index.html?message=Email sent successfully");
        } else {
            header("Location: index.html?message=Error sending email");
        }
    } else {
        header("Location: index.html?message=Invalid input. Please check your form.");

    }
} else {
    header("Location: index.html?message=Invalid request method");;
}
?>
