<?php
    require_once("function.php");
    require_once( "../vendor/autoload.php" );
    
    $identificador = $_GET['id'];

    $tupla = getEvento($identificador);
    $comentarios = getComentarios($identificador);

    $loader = new \Twig\Loader\FilesystemLoader('../templates');
    $twig = new Twig\Environment($loader, [] );
    
    echo $twig->render('eventoImprimir.html', ["info"=>$tupla, "id"=>$identificador, "tupla_eventos"=>$comentarios]);
?>