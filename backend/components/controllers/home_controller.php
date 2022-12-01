<?php

$uc1 = isset($_GET['uc1']) ? htmlspecialchars($_GET['uc1']) : '';
if($uc1 === '') $uc1 = 'home';
switch($uc1) {
    case 'home':
        echo '{}';
    break;

    case 'user':
        require 'user_controller.php';
    break;

    case 'quiz':
        require 'quiz_controller.php';
    break;

    default:
        http_response_code(404);
        die(json_encode(['error' => 'Page not found']));
    break;
}
