<?php
include 'conexion.php';
$nombre= $_POST ["nombre"];
$apellidoP= $_POST ["appaterno"];
$apellidoM= $_POST ["apmaterno"];
$telefono= $_POST ["tel"];
$correo= $_POST ["email"];
$contra= $_POST ["passw"];
$cod_dir= $_POST ["cod_dir"];
$cod_p= $_POST ["cod_p"];
$consulta = mysqli_query ($conexion,"INSERT INTO empleados (id, nombre, apellidoP, apellidoM, cod_direccion, telefono, correo, contra, cod_puesto) 
VALUES ('NULL', '$nombre', '$apellidoP', '$apellidoM', '$cod_dir', '$telefono', '$correo', '$contra','$cod_p')");
if ($consulta){
    echo "Registro exitoso.";
}
else {
    echo "Fallo en el registro, verifica los campos y datos.";
}
?>