<?php

$host = "localhost"; 
$uid = "root";
$pwd = "123456";
$dbname = 'portfolio';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $uid, $pwd);//connect database
    // echo "connect success"; 
}
catch(PDOException $e)
{
    echo $e->getMessage();
    exit();
}