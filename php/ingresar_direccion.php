<?php
    include 'conexion.php';
    $id= $_POST ["id_dir"];
    $nomCalle =$_POST["calle"];
    $numCalle= $_POST ["numC"];
    $colonia= $_POST ["col"];
    $cp= $_POST ["cp"];
    $alcaldia= $_POST ["alc"];
    $ciudad= $_POST ["ciudad"];
    $pais= $_POST ["pais"];
    $consulta= mysqli_query ($conexion,"INSERT INTO cod_direccion (id_dir, calle, numCalle, colonia, cp, alcaldia, ciudad, pais) 
    VALUES ('$id', '$nomCalle', '$numCalle', '$colonia', '$cp', '$alcaldia', '$ciudad', '$pais')");
    if ($consulta){
        echo "Registro exitoso.";
    }
    else {
        echo "Fallo en el registro, verifica los campos y datos.";
    }
?>