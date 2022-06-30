<?php

session_start();

$conn = new mysqli('localhost','root','');


$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

// Username Registration Check //
$s = "select * from usertable where name = '$username'";
$result = mysqli_query($con, $s);
$num = mysqli_num_rows($result);

if($num == 1) {
    echo "Username Already Taken";
}else{
    $reg = "insert into usertable(username, password, email) values ('$username', '$password', '$email')";
    mysqli_query($con, $reg);
    echo "Registration Successful";
}

// Database Connection //
if($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : ".$conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into user(email, glutenFree, vegan, peanut, vegetarian, lactose, kosher, keto, username, password)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $email, $glutenFree, $vegan, $peanut, $vegetarian, $lactose, $kosher, $keto, $username, $password);
    $execval = $stmt->execute();
    echo $execval;
    echo "registration Successfully Processed";
    $stmt->close();
    $conn->close();
}