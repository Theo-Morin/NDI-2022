<?php

$uc1 = isset($_GET['uc1']) ? htmlspecialchars($_GET['uc1']) : '';

switch($uc1) {
    case '':
    case 'home':
        echo '{}';
        break;

    case 'user':
        require 'user_controller.php';
        break;

    case 'quiz':
        require 'quiz_controller.php';
        break;

    case 'faq':
        require 'faq_controller.php';
        break;

    case 'articles':
        require 'articles_controller.php';
        break;

    case 'testimonies':
        require 'testimonies_controller.php';
        break;

    case 'definitions':
        require 'definitions_controller.php';
        break;

    case 'organizations':
        require 'organizations_controller.php';
        break;

    default:
        http_response_code(404);
        die(json_encode(['error' => 'Page not found']));
}
