<?php
    require_once( "../vendor/autoload.php" );
    
    $loader = new \Twig\Loader\FilesystemLoader('../templates');
    $twig = new Twig\Environment($loader, [] );
    
    echo $twig->render('about.html', ["titulo"=>"Contacto",
        "parrafo1"=>"Puede escribir un correo a los contribuidores: javierlg2598@correo.ugr.es o carlijnbonnen@correo.ugr.es"]);
?>