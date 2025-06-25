<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // if you're using Composer
// If not using Composer, include these manually:
// require 'PHPMailer.php';
// require 'SMTP.php';
// require 'Exception.php';

header('Content-Type: application/json');

// Capture form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    exit;
}

// Send email using PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com'; // Replace with your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your-email@gmail.com'; // Replace with your email
    $mail->Password   = 'your-app-password';    // Replace with your email app password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('your-email@gmail.com', 'Website Contact');
    $mail->addAddress('ask@abdulmajeed.dev');

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Contact Message from $name";
    $mail->Body    = "
        <strong>Name:</strong> $name<br>
        <strong>Email:</strong> $email<br><br>
        <strong>Message:</strong><br>$message
    ";

    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Thank you! Your message has been sent.']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
