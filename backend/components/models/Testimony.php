<?php

class Testimony {
    private function __construct() {}

    public static function getAll() {
        $stmt = Database::getInstance()->query('SELECT * FROM testimony');
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }

    public static function create($title, $author, $date, $content) {
        $stmt = Database::getInstance()->prepare('INSERT INTO testimony(title, author, date, content) VALUES (?, ?, ?, ?)');
        return $stmt->execute([$title, $author, $date, $content]);
    }
}
