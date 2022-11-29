/**
 * Création et selection de la base de donnée
 */
 CREATE DATABASE IF NOT EXIST DEFAULT_TEMPLATE;
 USE DEFAULT_TEMPLATE;

/**
 * Création de la table utilisateur
 */
CREATE TABLE users (
    userId INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    pseudonyme VARCHAR(255) NOT NULL,
    passwd VARCHAR(255) NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    phoneNumber VARCHAR(255),
    isForgot BOOLEAN DEFAULT 0,
    forgotPasswordToken VARCHAR(50),
    creationDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);