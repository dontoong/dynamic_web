import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './main.css'
function Member() {

    return (
      <>
<br />
<Link to ="/login">
<Button className='btn'>로그인</Button>
</Link>
<Link to="/register">
<Button className='btn'>회원가입</Button>
</Link>
<br/><br/>
</>
  );
}

export default Member;
