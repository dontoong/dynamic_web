<?php
require_once('./db.php');

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents('php://input'), true);

$member_id = $data['member_id'];

// 아이디 중복 확인 쿼리
$query = "SELECT * FROM member WHERE member_id = '$member_id'";
$result = mysqli_query($db, $query);

if (mysqli_num_rows($result) > 0) {
    // 중복된 아이디가 있는 경우
    echo json_encode(['isDuplicate' => true]);
} else {
    // 중복된 아이디가 없는 경우
    echo json_encode(['isDuplicate' => false]);
}

mysqli_close($db);
?>
