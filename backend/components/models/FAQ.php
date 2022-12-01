<?php

class Faq {
    public $categories = [], $questions = [];

    public function __construct() {
        $stmt = Database::getInstance()->query('SELECT * FROM faq_category');
        while ($category = $stmt->fetchObject()) {
            $this->categories[$category->id] = $category;
        }

        $stmt = Database::getInstance()->query('SELECT * FROM faq_question');
        $this->questions = $stmt->fetchAll(PDO::FETCH_OBJ);
    }
}
