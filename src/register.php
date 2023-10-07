<?php
require_once('./db.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents('php://input'), true);

$member_id = mysqli_real_escape_string($db, $data['member_id']);
$password = mysqli_real_escape_string($db, $data['password']);
$member_nick = mysqli_real_escape_string($db, $data['member_nick']);

// 입력 데이터의 유효성을 확인하는 추가적인 로직을 수행할 수 있습니다.

$sql = "INSERT INTO member (member_id, password, member_nick) VALUES ('$member_id', '$password', '$member_nick')";

if (mysqli_query($db, $sql)) {
    echo json_encode(['message' => '회원 가입 성공']);
} else {
    echo json_encode(['error' => '회원 가입 실패']);
}

mysqli_close($db);
?>
