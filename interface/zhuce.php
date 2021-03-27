<?php
    include('./library/conn.php');

    $tel = $_REQUEST['tel'];

    $sql = "select * from users where phone = '$tel'";

    $res = $mysqli->query($sql);

    $mysqli->close();

    if($res->num_rows>0){
        echo '<script>alert("手机号已注册!")</script>';
        echo '<script>location.href="../src/html/zhuce.html"</script>';
    }else{
        echo '<script>alert("注册成功!")</script>';
        echo '<script>location.href="../src/html/login.html"</script>';
    }
?>