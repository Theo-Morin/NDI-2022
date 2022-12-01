<?php
/**
*	Classe d'acces aux donnees Utilise les services de la classe PDO
*	Les attributs sont tous statiques, les 4 premiers pour la connexion
*	$monDatabase qui contiendra l'unique instance de la classe
*/
class Database {
    private static $pdo = null;

    // Constructeur privé : impossible de créer une instance
    private function __construct() {}

/**
 * Fonction statique qui cree l'unique instance de la classe
 * Appel : $instanceDatabase = self::getDatabase();
 * @return l'unique objet de la classe Database
 */
    public static function getInstance() {
        if (self::$pdo == null) {
            $connectionStr = 'mysql:host=' . constant('DB_SERVER') . ';dbname=' . constant('DB_NAME');
            $user = constant('DB_USER');
            $passwd = constant('DB_PASSWORD');
            self::$pdo = new PDO($connectionStr, $user, $passwd);
            self::$pdo->query("SET CHARACTER SET utf8");
            self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        return self::$pdo;
    }
}
