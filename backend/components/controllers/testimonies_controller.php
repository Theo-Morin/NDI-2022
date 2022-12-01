<?php

$uc2 = isset($_GET['uc2']) ? htmlspecialchars($_GET['uc2']) : null;

if ($uc2 === null) {
    $testimonies = Testimony::getAll();
    echo json_encode($testimonies);

} else if ($uc2 == 'new') {
    if (!isset($_REQUEST['title'])) die(json_encode(['error' => 'You must supply a title']));
    if (!isset($_REQUEST['date'])) die(json_encode(['error' => 'You must supply a valid date']));
    if (!isset($_REQUEST['content'])) die(json_encode(['error' => 'You must supply a content']));

    $author = null;
    if (isset($_REQUEST['author']) && $_REQUEST['author'] !== '') $author = $_REQUEST['author'];
    Testimony::create($_REQUEST['title'], $author, $_REQUEST['date'], $_REQUEST['content']);

} else {
    die(json_encode(['error' => 'Invalid route']));
}
