<?php
include "db.php";

$id = $_GET['id'];

$result = mysqli_query($conn, "SELECT * FROM students WHERE id=$id");
$data = mysqli_fetch_assoc($result);

if (isset($_POST['update'])) {
    $name   = $_POST['name'];
    $email  = $_POST['email'];
    $course = $_POST['course'];

    $sql = "UPDATE students SET
            name='$name', email='$email', course='$course'
            WHERE id=$id";
    mysqli_query($conn, $sql);

    header("Location: index.php");
}
?>

<form method="post">
    Name: <input type="text" name="name" value="<?= $data['name'] ?>"><br><br>
    Email: <input type="email" name="email" value="<?= $data['email'] ?>"><br><br>
    Course: <input type="text" name="course" value="<?= $data['course'] ?>"><br><br>
    <button type="submit" name="update">Update</button>
</form>
