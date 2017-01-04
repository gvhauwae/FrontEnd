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
$dbname="frontend";
$port = "3307";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname,$port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

/*
$con = new mysqli("localhost","root","usbw","frontend",3307);

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
            'Titel' => $row['Titel'],
            'Beschrijving' => $row['Beschrijving'],
            'Afbeelding' => $row['Afbeelding'],
            'Plaats' => $row['Plaats'],
            'Prijs' => $row['Prijs']
        );
    }
    header('Content-type:application/json');
    echo json_encode($data);
}*/
?>

