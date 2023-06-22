<?php
    require_once("Conexao.php");

    $sql = "select * from automoveis";
    $resultado = $conexao -> query($sql);
    
    if($resultado -> num_rows > 0){
        $data = array();
        while($row = $resultado -> fetch_assoc()){
            $data[] = $row;
        }
        echo json_encode($data);
    }

?>