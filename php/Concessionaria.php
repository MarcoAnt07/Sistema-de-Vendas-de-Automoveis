<?php
    $conn = new mysqli("localhost", "root", "", "fabrica", "3307");

    $sql = "select * from Concessionaria";
    $result = $conn -> query($sql);

    if($result -> num_rows > 0){
        $concessionaria = array();
        while($row = $result -> fetch_assoc()){
            $concessionaria[] = $row;
        }

        echo json_encode($concessionaria);
    }

    $conn -> close();


?>