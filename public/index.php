<?php
include '../backend/init.php';

echo "Hello World";


$db = Database::instance();
$db->prepare("SELECT * FROM `users`");


