<?php
// BioFacility Solutions website assessment-request handler.
// Designed for deployment on PHP-enabled Hostinger hosting.

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html#contact');
    exit;
}

// Basic bot trap. Bots often fill hidden fields; humans should never see it.
if (!empty($_POST['website'] ?? '')) {
    header('Location: index.html?form=sent#contact');
    exit;
}

function clean_line($value, $maxLength = 180) {
    $value = trim((string)$value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    return function_exists('mb_substr') ? mb_substr($value, 0, $maxLength) : substr($value, 0, $maxLength);
}

$name = clean_line($_POST['name'] ?? '', 120);
$email = clean_line($_POST['email'] ?? '', 160);
$organization = clean_line($_POST['organization'] ?? '', 180);
$message = trim((string)($_POST['message'] ?? ''));
$message = function_exists('mb_substr') ? mb_substr($message, 0, 4000) : substr($message, 0, 4000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: index.html?form=error#contact');
    exit;
}

$to = 'info@biofacilitysolutions.ca';
$subject = 'New BFS Website Assessment Request';

$body = "A new assessment request was submitted through biofacilitysolutions.ca.\n\n";
$body .= "Name: {$name}\n";
$body .= "Work email: {$email}\n";
$body .= "Organization: " . ($organization !== '' ? $organization : 'Not provided') . "\n\n";
$body .= "What they are trying to assess:\n{$message}\n\n";
$body .= "Submitted: " . date('Y-m-d H:i:s T') . "\n";

// Keep From on the BFS domain; use Reply-To so replying reaches the requester.
$headers = [];
$headers[] = 'From: BioFacility Solutions Website <info@biofacilitysolutions.ca>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

header('Location: index.html?form=' . ($sent ? 'sent' : 'error') . '#contact');
exit;
