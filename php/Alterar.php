<?php
    require_once("Conexao.php");

    $id = $_POST["id"];
    
    $sql = "update alocacao set Quantidade = Quantidade - 1 where ID = " . $id;

    $result = $conexao -> query($sql);

    echo '<script>alert("Venda Efetuada!!"); window.location.href = "../index.html"</script>';
?>