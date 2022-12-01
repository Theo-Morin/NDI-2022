<?php

class HelpfulOrganization {
    private function __construct() {}

    public static function getAll() {
        $stmt = Database::getInstance()->query('SELECT * FROM helpfulOrganization');
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }
}
