<?php
    include('./library/conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from users where username = '$username' and password = '$password'";

    $res = $mysqli->query($sql);

    $mysqli->close();

    if($res->num_rows>0){
        $row = $res->fetch_assoc();

         // 每次HTTP请求时会自动携带cookie发送
         setcookie('username',$row['username'],time()+3600*24,'/');
         setcookie('isLogined','true',time()+3600*24,'/');

        echo '<script>alert("登录成功!")</script>';
        echo '<script>location.href="../src/html/index.html"</script>';
    }else{
        echo '<script>alert("用户名或密码错误!")</script>';
        echo '<script>location.href="../src/html/login.html"</script>';
    }
?>