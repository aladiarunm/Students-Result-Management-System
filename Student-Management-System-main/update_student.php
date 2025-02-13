<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $grade = $_POST['grade'];
    $degree = $_POST['degree'];

    if (empty($name) || empty($email) || empty($age) || empty($grade) || empty($degree)) {
        echo "All fields are required!";
        exit();
    }

    $sql = "UPDATE students SET name=?, email=?, age=?, grade=?, degree=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssissi", $name, $email, $age, $grade, $degree, $id);

    if ($stmt->execute()) {
        echo "Student updated successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
