import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import './main.css'

function MemberO({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const member_nick = useSelector((state) => state.member_nick); //login.js에서 리액트 리덕스로 저장한 변수를 이곳으로 변수 호출

  const handleLogout = async (event) => {
    setIsLoggedIn(false);
    event.preventDefault();
    navigate('/login');
  };

  return (
    <div>
      <Button className='btn-logout' onClick={handleLogout}>로그아웃</Button>
      <p className='welcome'>{member_nick}님 환영합니다.</p> {/* 상태 출력 */}
      <br /><br />
    </div>
  );
}

export default MemberO;