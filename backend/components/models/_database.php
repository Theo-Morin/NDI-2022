<?php
/**
*	Classe d'acces aux donnees Utilise les services de la classe PDO
*	Les attributs sont tous statiques, les 4 premiers pour la connexion
*	$monDatabase qui contiendra l'unique instance de la classe
*/
class Database {
    private static $serveur='mysql:host=127.0.0.1';
    private static $bdd='dbname=database_name';
    private static $user='root';
    private static $mdp='';
    private static $db;
    private static $unPdo = null;


//	Constructeur privé, crée l'instance de PDO qui sera sollicitée
//	pour toutes les méthodes de la classe
    private function __construct()
    {
        Database::$unPdo = new PDO(Database::$serveur.';'.Database::$bdd, Database::$user, Database::$mdp);
        Database::$unPdo->query("SET CHARACTER SET utf8");
        Database::$unPdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    public function __destruct()
    { 
        Database::$unPdo = null;
    }
/**
*	Fonction statique qui cree l'unique instance de la classe
* Appel : $instanceDatabase = Database::getDatabase();
*	@return l'unique objet de la classe Database
*/
    public static function getInstance()
    {
        if(self::$unPdo == null)
        {
            self::$db= new Database();
        }
        return self::$unPdo;
    }
}
