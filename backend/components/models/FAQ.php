<?php

class Faq {
    public $categories = [];

    public function __construct() {
        $stmt = Database::getInstance()->query('SELECT * FROM faq_category');
        while ($category = $stmt->fetchObject()) {
            $this->categories[$category->id] = $category;
        }

        $stmt = Database::getInstance()->query('SELECT * FROM faq_question');
        $this->questions = $stmt->fetchAll(PDO::FETCH_OBJ);
    }
}


class FaqCategory {
    public $questions;

    public function __construct($categoryId) {
        $stmt = Database::getInstance()->prepare('SELECT * FROM faq_question WHERE categoryId = ?');
        $stmt->execute([$categoryId]);
        $this->questions = $stmt->fetchAll(PDO::FETCH_OBJ);
    }
}
