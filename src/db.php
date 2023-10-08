<?php
$db = mysqli_connect('로컬호스트', '관리자 이름', '내 비밀번호', 'cigar');

if (!$db) {
    echo json_encode(['error' => '데이터베이스 연결 실패']);
}
?>
