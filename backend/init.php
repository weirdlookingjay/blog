<?php
session_start();
spl_autoload_register(function($class){
   require 'classes/'.$class.'.php';
});

define("DB_HOST", getenv('DB_HOST'));
define("DB_NAME", getenv('DB_NAME'));
define("DB_USER", getenv('DB_USER'));
define("DB_PASS", getenv('DB_PASS1'));
define('DB_ENCODING', getenv('DB_ENCODING'));
define("BASE_URL", getenv('BASE_URL'));