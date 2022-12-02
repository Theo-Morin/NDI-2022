<?php

$uc2 = isset($_GET['uc2']) ? htmlspecialchars($_GET['uc2']) : null;

if ($uc2 === null) {
    $testimonies = Testimony::getAll();
    echo json_encode($testimonies);

} else if ($uc2 == 'new') {
    if (!isset($_POST['title'])) quitWithCodeAndJson(417, ['error' => 'You must supply a title']);
    if (!isset($_POST['content'])) quitWithCodeAndJson(417, ['error' => 'You must supply a content']);

    $author = null;
    if (isset($_POST['author']) && $_POST['author'] !== '') $author = $_POST['author'];
    $result = Testimony::create($_POST['title'], $author, getToday(), $_POST['content']);
    if ($result) {
        quitWithCodeAndJson(201, ['success' => 'Row added']);
    } else {
        quitWithCodeAndJson(500, ['error' => 'Sorry, it failed']);
    }

} else {
    quitWithCodeAndJson(404, ['error' => 'Invalid route']);
}
