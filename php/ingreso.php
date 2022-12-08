<?php
    include 'conexion.php';
    $nombre= $_POST ["nombre"];
    $apellidoP= $_POST ["appaterno"];
    $apellidoM= $_POST ["apmaterno"];
    $telefono= $_POST ["tel"];
    $correo= $_POST ["email"];
    $contra= $_POST ["passw"];
    $consulta= mysqli_query ($conexion,"INSERT INTO usuarios (id, nombre, apellidoP, apellidoM, telefono, correo, pass) 
    VALUES ('NULL', '$nombre', '$apellidoP', '$apellidoM', '$telefono', '$correo', '$contra')");
    if ($consulta){
        echo "Registro exitoso.";
    }
    else {
        echo "Fallo en el registro, verifica los campos y datos.";
    }
?>