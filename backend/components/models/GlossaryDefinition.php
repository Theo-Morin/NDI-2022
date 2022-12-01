<?php

class GlossaryDefinition {
    private function __construct() {}

    public static function getAll() {
        $stmt = Database::getInstance()->query('SELECT * FROM definitions ORDER BY word');
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }
}
