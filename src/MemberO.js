import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import './main.css'
import axios from 'axios'; // Axios 추가
import Login from './login'

function MemberO({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const memberNick = useSelector((state) => state.member_nick);

  const handleLogout = async (event) => {
    setIsLoggedIn(false);
    event.preventDefault();
    navigate('/login');
    console.log(memberNick);
  };

  return (
    <div>
      <Button className='btn-logout' onClick={handleLogout}>로그아웃</Button>
      <p className='welcome'>{memberNick}님 환영합니다.</p> {/* 상태 출력 */}
      <br /><br />
    </div>
  );
}

export default MemberO;