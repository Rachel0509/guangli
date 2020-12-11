<?php

include('connect.php');
include('functions.php');

//Get the query string, which is in the URL? page=home
$portfolioPage = $_GET["page"];

//This branch is executed when it is home
if($portfolioPage == 'home'){

    $topPortfolios = GetTopPortfolios($conn);
    
    return $topPortfolios;

}else if($portfolioPage == 'gallery'){//Execute this branch when it is gallery

    $imgPortfolios = GetImgPortfolios($conn);
    
    return $topPortfolios;


}else if($portfolioPage == 'contact'){//Execute this branch when it is Contact

}