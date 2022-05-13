<?php 
    function openConexion(){
        $conexion = mysqli_connect('localhost', 'javivi', 'javi');
        $abreBD = mysqli_select_db($conexion, "sibw_bd");
        
        // Se abre la base de datos
        if(!$abreBD){
            die ('No se pudo abrir la base de datos. ERROR: ' . mysqli_error());
        }
        
        return $conexion;
    }
    
    function closeConexion($conexion){  
        mysqli_close($conexion);
    }
    
    function eventosPortada(){
        $conexion = openConexion();
        
        $sql = "SELECT * FROM evento";
        $result = mysqli_query($conexion, $sql);
        
        $vector = array();
        
        $index = 0;
        while ($row = mysqli_fetch_array($result)) {
            $vector[$index] = $row;
            $index++;
        }
       
        closeConexion($conexion);        
        
        return $vector;
    }
    
    function getEvento($identificador){
        $conexion = openConexion();
        
        $sql= "SELECT * FROM evento WHERE id = $identificador";
        $result = mysqli_query($conexion, $sql);
        
        $vector = mysqli_fetch_array($result);
        
        closeConexion($conexion);
        
        return $vector;
    }
    
    function getOpinion(){
        $conexion = openConexion();
        
        $identificador = $_GET['id'];
        
        $sql = "SELECT * FROM comentario WHERE id = $identificador";
        $result = mysqli_query($conexion, $sql);

        $vector = array();
        
        $index = 0;
        while ($row = mysqli_fetch_array($result)) {
            $vector[$index] = $row;
            $index++;
        }
        
        closeConexion($conexion);
        
        return $vector;
    }
    
    function getComentarios($identificador){
        $conexion = openConexion();
        
        $sql = "SELECT * FROM comentario WHERE id=$identificador";
        $result = mysqli_query($conexion, $sql);
        
        $vector = array();
        
        $index = 0;
        while ($row = mysqli_fetch_array($result)) {
            $vector[$index] = $row;
            $index++;
        }
        
        closeConexion($conexion);
        
        return $vector;      
   }
   
   function getSidebar(){
       $conexion = openConexion();
       
       $sql = "SELECT * FROM sidebar";
       $result = mysqli_query($conexion, $sql);
       
       $vector = array();
       
       $index = 0;
       while ($row = mysqli_fetch_array($result)) {
           $vector[$index] = $row;
           $index++;
       }
       
       closeConexion($conexion);
       
       return $vector;
   }
?>