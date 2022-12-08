<?php
    include 'conexion.php';
    $mail = $_GET ["email"];
    $psw = $_GET ["pass"];
    $consu = mysqli_query ($conexion, "SELECT * FROM usuarios WHERE correo = '$mail' AND pass = '$psw'");
    if($consu){
        echo "Inicio de sesión exitoso: " .$mail;
    } else {
        echo "Usuario no encontrado, verifique los datos";
    }
?>