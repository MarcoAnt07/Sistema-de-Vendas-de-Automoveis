<?php
    $conn = mysqli_connect("localhost", "root", "", "crudjs", "3307");

    if($conn -> connect_error){
        die("erro na conexão: " . $conn->connect_error);
    }
    else{
        die("conectado");
    }

    echo json_encode($conn);

?>