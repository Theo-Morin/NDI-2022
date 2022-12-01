<?php

class Article {
    private function __construct() {}

    public static function getAll() {
        $stmt = Database::getInstance()->query('SELECT * FROM article');
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }
}
