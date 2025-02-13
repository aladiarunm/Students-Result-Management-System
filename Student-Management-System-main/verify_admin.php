<?php
session_start();

// Securely store the password (Replace 'admin123' with your real password)
$correct_password = "admin123"; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $password = $_POST['password'];

    if ($password === $correct_password) {
        $_SESSION["admin_logged_in"] = true; // Set session
        echo "success"; // Return success response
    } else {
        echo "error"; // Return error response
    }
}
?>
