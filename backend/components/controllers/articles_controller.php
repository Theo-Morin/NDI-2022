<?php

$articles = Article::getAll();

echo json_encode($articles);
