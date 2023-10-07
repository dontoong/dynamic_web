<?php
include 'db.php'; // 데이터베이스 연결 정보를 포함합니다.

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    #print_r($_SERVER);
    $body = file_get_contents('php://input');
    $data = json_decode($body, true);
    #$member_nick = mysqli_real_escape_string($db, $data["member_nick"]);
    $member_id = mysqli_real_escape_string($db, $data["member_id"]);
    $password = mysqli_real_escape_string($db, $data["password"]);


    // 사용자가 입력한 아이디와 일치하는 사용자 정보를 데이터베이스에서 검색
    $query = "SELECT * FROM member WHERE member_id = '$member_id'";
    $result = mysqli_query($db, $query);

    if ($result) {
        $user = mysqli_fetch_assoc($result);
        if ($password == $user['password']) {
            // 비밀번호가 올바르게 검증됐을 때만 로그인 성공
            $response = array("success" => true, "message" => "로그인 성공");
            echo json_encode($response);

        } else {
            // 비밀번호가 올바르게 검증되지 않았을 때 로그인 실패
            $response = array("success" => false, "message" => "로그인 실패");
            echo json_encode($response);
        }
    } else {
        // 쿼리 실행 실패
        $response = array("success" => false, "message" => "쿼리 실행 실패");
        echo json_encode($response);
    }
} else {
    // POST 요청이 아닌 경우
    $response = array("success" => false, "message" => "POST 요청이 아닙니다.");
    echo json_encode($response);
}
?>
