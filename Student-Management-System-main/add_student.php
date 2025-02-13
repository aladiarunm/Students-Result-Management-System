<?php
include 'db.php'; // Include the database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $grade = $_POST['grade'];
    $degree = $_POST['degree'];

    // Validate inputs
    if(empty($name) || empty($email) || empty($age) || empty($grade) || empty($degree)) {
        echo "All fields are required!";
        exit();
    }

    $sql = "INSERT INTO students (name, email, age, grade, degree) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssiss", $name, $email, $age, $grade, $degree);

    if ($stmt->execute()) {
        echo "Student added successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
