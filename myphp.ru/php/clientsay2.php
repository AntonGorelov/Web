<?php
  $user = 'root';
  $password = '';
  $pdo = new PDO('mysql:host=127.0.0.1;dbname=company;charset=utf8', $user, $password);
  $statement=$pdo->prepare("SELECT * FROM clientsay2");
  $statement->execute();
  $results=$statement->fetchAll(PDO::FETCH_ASSOC);
  $json=json_encode($results);
  echo $json;
?>