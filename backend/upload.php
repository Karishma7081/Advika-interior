<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "your-email@example.com"; // 🔹 replace with your email
    $subject = "New Career Application from $name";
    $body = "Name: $name\nPhone: $phone\nEmail: $email\nMessage: $message\n";
    $headers = "From: $email";

    if (isset($_FILES['cv']) && $_FILES['cv']['error'] == 0) {
        $file_tmp = $_FILES['cv']['tmp_name'];
        $file_name = $_FILES['cv']['name'];
        $content = chunk_split(base64_encode(file_get_contents($file_tmp)));
        $uid = md5(uniqid(time()));

        $header = "From: $email\r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-Type: multipart/mixed; boundary=\"" . $uid . "\"\r\n\r\n";
        $header .= "--" . $uid . "\r\n";
        $header .= "Content-type:text/plain; charset=utf-8\r\n";
        $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $header .= $body . "\r\n\r\n";
        $header .= "--" . $uid . "\r\n";
        $header .= "Content-Type: application/octet-stream; name=\"" . $file_name . "\"\r\n";
        $header .= "Content-Transfer-Encoding: base64\r\n";
        $header .= "Content-Disposition: attachment; filename=\"" . $file_name . "\"\r\n\r\n";
        $header .= $content . "\r\n\r\n";
        $header .= "--" . $uid . "--";

        if (mail($to, $subject, "", $header)) {
            echo "✅ Application sent successfully!";
        } else {
            echo "❌ Failed to send email.";
        }
    } else {
        echo "⚠️ No file uploaded.";
    }
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "your-email@example.com"; // 🔹 apna email daalo
    $subject = "New Career Application from $name";
    $body = "Name: $name\nPhone: $phone\nEmail: $email\nMessage: $message\n";

    if (isset($_FILES['cv']) && $_FILES['cv']['error'] == 0) {
        $file_tmp = $_FILES['cv']['tmp_name'];
        $file_name = $_FILES['cv']['name'];
        $file_type = $_FILES['cv']['type'];

        $content = chunk_split(base64_encode(file_get_contents($file_tmp)));
        $uid = md5(uniqid(time()));

        // Headers
        $headers = "From: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"" . $uid . "\"\r\n\r\n";

        // Message
        $messageBody = "--" . $uid . "\r\n";
        $messageBody .= "Content-type:text/plain; charset=utf-8\r\n";
        $messageBody .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $messageBody .= $body . "\r\n\r\n";

        // Attachment
        $messageBody .= "--" . $uid . "\r\n";
        $messageBody .= "Content-Type: $file_type; name=\"" . $file_name . "\"\r\n";
        $messageBody .= "Content-Transfer-Encoding: base64\r\n";
        $messageBody .= "Content-Disposition: attachment; filename=\"" . $file_name . "\"\r\n\r\n";
        $messageBody .= $content . "\r\n\r\n";
        $messageBody .= "--" . $uid . "--";

        // Send mail
        if (mail($to, $subject, $messageBody, $headers)) {
            echo "✅ Application sent successfully!";
        } else {
            echo "❌ Failed to send email.";
        }
    } else {
        echo "⚠️ No file uploaded.";
    }
}
?>
