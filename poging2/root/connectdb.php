<?php
/**
 * Created by PhpStorm.
 * User: Gillian
 * Date: 14/12/2016
 * Time: 12:00
 */

$servername = "localhost";
$username = "root";
$password = "usbw";

// Create connection
$conn = new mysqli($servername, $username, $password,"test");
$query = "select * from plaatsen";
$result =$conn->query("select * from plaatsen");
$data = array();
while($row=$result->fetch_array()){
    $data[]=array(
      'id' => $row['id']
    );

}

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

/*
$con = new mysqli("localhost","root","usbw","test");

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
echo "Connected successfully";

$sql = mysql_query("SELECT * FROM plaatsen");
if(mysql_num_rows($sqli)){
    $data = array();
    while($row = mysql_fetch_array($sqli)){
        $data[]=array(
            'id' => $row['id'],
            'title' => $row['title'],
            'description' => $row['description'],
            'price' => $row['price'],
            'place' => $row['place']
        );
    }
    header('Content-type:application/json');
    echo json_encode($data);
}*/
?>

