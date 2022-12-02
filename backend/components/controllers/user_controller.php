<?php

if (!isset($_GET['uc2'])) {
    header('Location: /home');
    die;
}

$uc2 = htmlspecialchars($_GET['uc2']);
$user = new User();

switch ($uc2) {
    case 'login':
        if (constant('personalToken') != null) {
            quitWithCodeAndJson(400, ['error' => 'You are already connected']);
        }
        if (isset($_POST['email'], $_POST['passwd'])) {
            $email = htmlspecialchars($_POST['email']);
            $passwd = htmlspecialchars($_POST['passwd']);
            $token = $user->login($email,$passwd);
            
            if($token) {
                $_SESSION['userToken'] = $token;
                echo json_encode(['success' => 'Logged in']);
            } else {
                quitWithCodeAndJson(401, ['error' => 'Invalid credentials']);
            }
        }
        break;

    case 'register':
        if(isset($_POST['email']) && isset($_POST['pseudonyme']) && isset($_POST['passwd'])) {
            $email = htmlspecialchars($_POST['email']);
            $pseudonyme = htmlspecialchars($_POST['pseudonyme']);
            $passwd = htmlspecialchars($_POST['passwd']);
            if(User::register($email, $pseudonyme, $passwd)) {
                echo json_encode(['success' => 'Registered']);
            } else {
                quitWithCodeAndJson(409, ['error' => 'Email already used']);
            }
        }
        break;
}
