<?php
    $conn = new mysqli("localhost", "root", "", "fabrica", "3307");

    if($conn -> connect_error){
        die("erro na conexão: " . $conn->connect_error);
    }
    
    $sql = "select * from clientes";
    $result = $conn -> query($sql);

    if($result -> num_rows > 0){
        $data = array();
        while($row = $result -> fetch_assoc()){
            $data[] = $row;
        }
        echo json_encode($data);
    }

    $conn -> close();
?>