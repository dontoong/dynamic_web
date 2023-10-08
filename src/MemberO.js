import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './main.css'
import axios from 'axios'; // Axios 추가
import Login from './login'

function MemberO({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const response = axios.post('http://localhost/dynamic_web/src/login.php');

  const handleLogout = async (event) => {
    // 로그아웃 버튼 클릭 시 로그아웃 처리
    setIsLoggedIn(false); // 로그인 상태를 업데이트하여 로그아웃 상태로 변경합니다.
    event.preventDefault();
    navigate('/login');
    console.log();
    
  };

  return (
    <div>
      <Button className='btn-logout' onClick={handleLogout}>로그아웃</Button>
      <p className='welcome'>{window.member_nick}님 환영합니다.</p>
      <br /><br />
    </div>
  );
}

export default MemberO;