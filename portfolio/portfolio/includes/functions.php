<?php

//get database
function GetTopPortfolios($conn)
{
    $result = array();
    $sql = 'select * from items where isTop = 1'; //sql, get isTop is 1 data, isTop is 1 represents the top to the first page of another data
    $query = $conn->query($sql);

    while ($row = $query->fetchAll(PDO::FETCH_ASSOC)) {
        $result = $row;
    }

    echo (json_encode($result));
}

//get gallery data
function GetImgPortfolios($conn)
{
    $result = array();
    $sql = 'select * from items where type = "img"'; //sql, Get data of type IMG (image)
    $query = $conn->query($sql);

    while ($row = $query->fetchAll(PDO::FETCH_ASSOC)) {
        $result = $row;
    }

    echo (json_encode($result));
}
