import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './main.css'

function Header({ isLoggedIn }) {

  const navigate = useNavigate();
  
  const memberPage = async (event) => {
    // 여기에서 로그인 상태를 확인하거나 필요한 조건을 확인하세요.
    //const isLoggedIn = setIsLoggedIn/* 여기에서 로그인 상태를 확인하는 로직을 추가하세요 */;

    if (!isLoggedIn) {
      window.alert("로그인이 필요합니다.");
      event.preventDefault();
      navigate('/login');
      

    }
  }

  return (
    <>
      <div id="background">
        <br />
        <Link to="/">
          <Image src="/image/main/cigar.png" className="mx-auto d-block header-img" />
        </Link>
      </div>
      <br/><br/><br/><br/>
      <ul className="nav nav-tabs custom-tabs justify-content-center">
        <li className="nav-item">
          <NavLink to="/korea_cigar" className="nav-link" activeClassName="active">
            국산담배
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/abroad_cigar" className="nav-link" activeClassName="active">
            해외담배
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/elec_cigar" className="nav-link" activeClassName="active">
            전자담배
          </NavLink>
        </li>
        <li className="nav-item">
          {/* 'About me' 링크 클릭 시 memberPage 함수 호출 */}
          <NavLink to="/about_me" className="nav-link" activeClassName="active" onClick={memberPage}>
            About me
          </NavLink>
        </li>
      </ul>
      <br/><br/>
    </>
  );
}

export default Header;
