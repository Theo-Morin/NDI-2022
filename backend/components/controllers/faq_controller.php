<?php

$uc2 = isset($_GET['uc2']) ? htmlspecialchars($_GET['uc2']) : null;

if ($uc2 === null) {
    $faq = new Faq();
    echo json_encode($faq->categories);
} else {
    $faqCat = new FaqCategory($uc2);
    echo json_encode($faqCat->questions);
}
