<?php
    require_once( "../vendor/autoload.php" );
    
    $loader = new \Twig\Loader\FilesystemLoader('../templates');
    $twig = new Twig\Environment($loader, [] );
    
    echo $twig->render('about.html', ["titulo"=>"Contacto",
        "parrafo1"=>"Somos dos estudiantes de la Universidad de Granada realizando el grado en Ingenier�a Inform�tica.",
        "parrafo2"=>"Estamos cursando la asignatura Sistemas De Informaci�n Basados En Web."]);
?>