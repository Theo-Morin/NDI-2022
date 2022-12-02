<?php

class Faq {
    public $categories = [];

    public function __construct() {
        $stmt = Database::getInstance()->query('SELECT * FROM faq_category ORDER BY pos');
        while ($category = $stmt->fetchObject()) {
            $this->categories[$category->id] = $category;
        }
    }

    public function loadQuestions() {
        foreach ($this->categories as $category) {
            $category->questions = [];
        }

        $stmt = Database::getInstance()->query('SELECT * FROM faq_question ORDER BY pos');
        $questions = $stmt->fetchAll(PDO::FETCH_OBJ);
        foreach ($questions as $qu) {
            $this->categories[$qu->categoryId]->questions[] = $qu;
        }
    }
}


class FaqCategory {
    public $questions;

    public function __construct($categoryId) {
        $stmt = Database::getInstance()->prepare('SELECT * FROM faq_question WHERE categoryId = ? ORDER BY pos');
        $stmt->execute([$categoryId]);
        $this->questions = $stmt->fetchAll(PDO::FETCH_OBJ);
    }
}
