<?php

class Article {
    private function __construct() {}

    public static function getAll($onlyTop = false) {
        $cond = $onlyTop ? ' WHERE isPinned' : '';
        $stmt = Database::getInstance()->query('SELECT * FROM article' . $cond);
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }

    public static function create($title, $author, $date, $content, $isPinned = false) {
        $queryStr = 'INSERT INTO article(title, author, date, content, isPinned) VALUES (?, ?, ?, ?, ?)';
        $stmt = Database::getInstance()->prepare($queryStr);
        $stmt->execute([$title, $author, $date, $content, $isPinned]);
    }
}
