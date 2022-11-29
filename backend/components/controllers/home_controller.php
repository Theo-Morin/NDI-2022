<?php

$uc1 = isset($_GET['uc1']) ? htmlspecialchars($_GET['uc1']) : "null";
if($_GET['uc1'] == "") $uc1 = "home";
switch($uc1) {
    case "user":
        require 'user_controller.php';
    break;
    default:
        header('Content-Type: application/json');
        http_response_code(404);
        print json_encode(["error" => "Page not found"]);
        exit();
    break;
}