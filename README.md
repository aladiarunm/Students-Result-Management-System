# 🎓 Student Management System  

## **Introduction**  
The **Student Management System** is a web-based application that allows **admins** to manage student records and **students** to view their academic details.  
This system features **role-based authentication**, allowing **admins** to add, update, and delete student records, while students have **read-only access**.  

---

## **Features**  

### 🔑 **Admin Dashboard (`admin.html`)**
- **Secure Login**: Requires password authentication.
- **Student Management**: Add, Edit, and Delete student records.
- **Live Search**: Quickly search students by Name, Email, or Degree.
- **Logout Option**: Securely log out and return to the home page.

### 🎓 **Student Dashboard (`student.html`)**
- **Read-Only Access**: Students can only view records.
- **Live Search**: Search students by Name, Email, or Degree.

### 🔒 **Authentication & Security**
- **Admin requires password verification** before accessing the dashboard.
- **Unauthorized users cannot access `admin.html` directly**.
- **Session-based authentication** to prevent unauthorized access.
- **Logout functionality** to end admin sessions securely.

---

## **🛠️ Technologies Used**
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** PHP  
- **Database:** MySQL  
- **Server:** Apache (XAMPP, WAMP, LAMP)  

---

## **📂 Project Structure**
📁 student-management-system 
│── 📄 index.html # Role selection page (Admin/Student) 
│── 📄 admin.html # Admin dashboard (Manage students) 
│── 📄 student.html # Student dashboard (View-only mode) 
│── 📄 style.css # Styling for the project 
│── 📄 script.js # JavaScript functions (Admin) 
│── 📄 db.php # Database connection file 
│── 📄 fetch_students.php # Fetch all students from database 
│── 📄 add_student.php # Add a new student 
│── 📄 update_student.php # Update student details 
│── 📄 delete_student.php # Delete student record 
│── 📄 get_student.php # Fetch a single student's details for editing 
│── 📄 verify_admin.php # Admin password verification 
│── 📄 logout.php # Admin logout script 
│── 📄 README.md # Project documentation

---

## **🔧 Installation & Setup (Local Implementation)**  
Follow these steps to set up and run the project locally.

### **1️⃣ Install Required Software**
Make sure you have the following installed on your system:
- **XAMPP / WAMP (For Windows)**
- **LAMP Stack (For Linux)**
- **Apache & MySQL Server** (Must be running)

---

### **2️⃣ Set Up the MySQL Database**
1. Start **Apache** and **MySQL** from XAMPP/WAMP/LAMP.
2. Open **phpMyAdmin** (`http://localhost/phpmyadmin/`).
3. Create a new database:

   ```sql
   CREATE DATABASE student_db;
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    grade VARCHAR(10) NOT NULL,
    degree VARCHAR(255) NOT NULL
);


3️⃣ Configure the Project
Download the project files and place them inside:
XAMPP: C:\xampp\htdocs\student-management-system\
WAMP: C:\wamp\www\student-management-system\
LAMP (Linux): /var/www/html/student-management-system/


Configure the database connection in db.php:
php
Copy
Edit

<?php
$servername = "localhost";
$username = "root";  // Change if needed
$password = "";      // Change if needed
$database = "student_db";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>


Set the Admin Password in verify_admin.php:
php
Copy
Edit
<?php
session_start();
$correct_password = "admin123"; // Change this for security

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $password = $_POST['password'];

    if ($password === $correct_password) {
        $_SESSION["admin_logged_in"] = true;
        echo "success";
    } else {
        echo "error";
    }
}
?>

4️⃣ Run the Project
Open your web browser.
Go to:
perl
Copy
Edit
http://localhost/student-management-system/index.html
Choose a Role:
Admin: Enter the password (admin123) to access admin.html.
Student: View records in student.html.


🔄 How It Works
🔑 Admin Login & Authentication
Clicking Admin asks for a password.
If correct, user is redirected to admin.html.
If incorrect, an alert appears.
🚫 Security Features
Direct access to admin.html is blocked without authentication.
Session-based authentication keeps the admin logged in.
Logout button removes session and redirects to index.html.
🎓 Student Dashboard (Read-Only Mode)
Displays all student records.
Search feature for easy filtering.
No edit or delete options.

🔑 Logout Functionality
To log out of the Admin Panel, click the Logout button.
Alternatively, visit:

perl
Copy
Edit
http://localhost/student-management-system/logout.php
This destroys the session and redirects back to the home page.

📌 Future Improvements
🔑 Store Admin passwords securely using hashed values in MySQL.
📊 Export student data as a CSV file.
📩 Email notifications when a student is added/updated.



📝 License
This project is open-source under the MIT License.


🎉 Thank You for Using the Student Management System!
markdown
Copy
Edit

---

## **✅ Next Steps**
1. **Copy the README.md** into your project folder.  
2. **Customize the Admin Password** in `verify_admin.php`.  
3. **Test Everything** before deployment.  
