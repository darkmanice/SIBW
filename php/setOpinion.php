<?php
    include 'function.php';
        
   
        $conexion = openConexion();
        
        $identificador = $_POST['id'];
        
        if(!empty($_POST)){
            $autor = mysqli_real_escape_string($conexion, $_POST['name']);
            $correo = mysqli_real_escape_string($conexion, $_POST['email']);
            $opinion = mysqli_real_escape_string($conexion, $_POST['message']);
            $ip = $_SERVER['REMOTE_ADDR'];
            
            date_default_timezone_set('Europe/Madrid');
            $time = date('Y/m/d h:i:s a');
            
            $sql = "INSERT INTO comentario (correo, autor, opinion, hora, ip, id) VALUES
                ('$correo', '$autor', '$opinion', '$time', '$ip', '$identificador')";
            
            $insert = mysqli_query($conexion, $sql);
            
            if(!$insert){
                die('Error: ' . mysqli_error($conexion));
            }
            
            closeConexion($conexion);
        }
    
    header('Location:  evento.php?id=' . $identificador);
?>