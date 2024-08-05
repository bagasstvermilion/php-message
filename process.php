<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $response = array(
        "status" => "success",
        "name" => $name,
        "email" => $email,
        "message" => $message
    );

    echo json_encode($response);
} else {
    $response = array(
        "status" => "error",
        "message" => "There was an error processing your request."
    );

    echo json_encode($response);
}
?>
..