import React from 'react';
import Button from 'react-bootstrap/Button';
import './main.css'

function MemberO({ setIsLoggedIn }) {
  const handleLogout = () => {
    // 로그아웃 버튼 클릭 시 로그아웃 처리
    setIsLoggedIn(false); // 로그인 상태를 업데이트하여 로그아웃 상태로 변경합니다.
  };

  return (
    <div>
      <Button className='btn'  onClick={handleLogout}>로그아웃</Button>
      <p class='welcome'>님 환영합니다.</p>
    </div>
  );
}

export default MemberO;