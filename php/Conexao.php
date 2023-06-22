<?php
    $conn = new mysqli("localhost", "root", "", "fabrica", "3307");

    if($conn -> connect_error){
        die("erro na conexão: " . $conn->connect_error);
    }
    
    $sql = "select * from clientes";
    $result = $conn -> query($sql);

?>