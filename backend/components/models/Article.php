<?php

class Article {
    private function __construct() {}

    public static function getAll() {
        $stmt = Database::getInstance()->query('SELECT * FROM article');
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }

    public static function create($title, $author, $date, $content) {
        $stmt = Database::getInstance()->prepare('INSERT INTO article(title, author, date, content) VALUES (?, ?, ?, ?)');
        $stmt->execute([$title, $author, $date, $content]);
    }
}
