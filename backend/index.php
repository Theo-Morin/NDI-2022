<?php

/**
 * Copyright © Théo Morin - 2022, all right reserved.
 * Template author      : Théo Morin
 * Contact              : contact@theomorin.fr
 * GitHub               : https://github.com/Theo-Morin
 * Personal website     : https://theomorin.fr
 * PHP version          : 7.3
 * 
 * Usage condition :
 *      - Don't extract project methods, algorithms, structures of code, etc.. for another project.
 *      - Non commercial utilisation ONLY
 *      - Leave the above comment without modification
 */

// get token bearer from header
define('personalToken', isset($_SERVER['HTTP_AUTHORIZATION']) ? htmlspecialchars($_SERVER['HTTP_AUTHORIZATION']) : null);

header('Content-Type: application/json');
date_default_timezone_set('Europe/Paris');

// Define usuables variables
require getcwd() . '/config/define.php';
require getcwd() . '/config/database.php';

// Require function library
require getcwd() . '/config/func.php';

// Include your classes
require getcwd() . '/config/classes_require.php';

// Init controllers
require getcwd() . '/components/controllers/home_controller.php';
