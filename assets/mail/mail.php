<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $subject = $_POST["Subject"];
    $email = $_POST["Sender"];
    $phone = $_POST["Phone"];
    $message = $_POST["Message"];

    $to = "mohammedhakim084@gmail.com";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Format the email body as desired
    $email_body = "Name: $name\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Message: $message\n";
    
    // Send the email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Error sending email.";
    }
}
?>
