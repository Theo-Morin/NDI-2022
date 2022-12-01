<?php

if (!isset($_GET['uc2'])) {
    header('Location: /home');
    die;
}
$uc2 = htmlspecialchars($_GET['uc2']);
$user = new User();
switch ($uc2) {
    case 'login':
        if(constant('personalToken') != null) {
            http_response_code(400);
            print json_encode(['error' => 'You are already connected']);
        }
        if(isset($_POST['email'], $_POST['passwd'])) {
            $email = htmlspecialchars($_POST['email']);
            $passwd = htmlspecialchars($_POST['passwd']);
            $token = $user->login($email,$passwd);
            
            if($token) {
                $_SESSION['userToken'] = $token;
                //http_response_code(200);
                print json_encode(['success' => 'Logged in']);
            }
            else {
                http_response_code(401);
                print json_encode(['error' => 'Invalid credentials']);
            }

            exit();
        }
    break;
    case 'register':
        if(isset($_POST['email']) && isset($_POST['pseudonyme']) && isset($_POST['passwd'])) {
            $email = htmlspecialchars($_POST['email']);
            $pseudonyme = htmlspecialchars($_POST['pseudonyme']);
            $passwd = htmlspecialchars($_POST['passwd']);
            if(User::register($email, $pseudonyme, $passwd)) {
                http_response_code(200);
                print json_encode(['success' => 'Registered']);
            }
            else {
                http_response_code(409);
                print json_encode(['error' => 'Email already used']);
            }
            exit();
        }
    break;
}
