<?php
$db = mysqli_connect('localhost', 'root', 'rla3241265;', 'cigar');

if (!$db) {
    echo json_encode(['error' => '데이터베이스 연결 실패']);
}
?>
