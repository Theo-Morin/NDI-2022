<?php

$faq = new Faq();

echo json_encode([
    'categories' => $faq->categories,
    'questions' => $faq->questions,
]);
