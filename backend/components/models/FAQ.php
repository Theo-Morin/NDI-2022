<?php

class Faq {
    public $categories = [];

    public function __construct() {
        $stmt = Database::getInstance()->query('SELECT * FROM faq_category');
        while ($category = $stmt->fetchObject()) {
            $this->categories[$category->id] = $category;
        }
    }

    public function loadQuestions() {
        foreach ($this->categories as $category) {
            $category->questions = [];
        }

        $stmt = Database::getInstance()->query('SELECT * FROM faq_question');
        $questions = $stmt->fetchAll(PDO::FETCH_OBJ);
        foreach ($questions as $qu) {
            $this->categories[$qu->categoryId]->questions[] = $qu;
        }
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
