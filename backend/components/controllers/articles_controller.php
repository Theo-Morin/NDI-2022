<?php

$uc2 = isset($_GET['uc2']) ? htmlspecialchars($_GET['uc2']) : null;

if ($uc2 === null) {
    $articles = Article::getAll();
    echo json_encode($articles);

} else if ($uc2 == 'top') {
    $articles = Article::getAll(true);
    echo json_encode($articles);

} else if ($uc2 == 'new') {
    if (!isset($_POST['title'])) die(json_encode(['error' => 'You must supply a title']));
    if (!isset($_POST['content'])) die(json_encode(['error' => 'You must supply a content']));

    $author = null;
    if (isset($_POST['author']) && $_POST['author'] !== '') $author = $_POST['author'];
    $isPinned = isset($_POST['isPinned']) && $_POST['isPinned'] ? true : false;
    Article::create($_POST['title'], $author, date('Y-m-d'), $_POST['content'], $isPinned);

} else {
    die(json_encode(['error' => 'Invalid route']));
}
