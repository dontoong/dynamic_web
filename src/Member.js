import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './main.css'
function Member() {

    return (
      <>
<div>
<Link to ="/login">
<Button className='btn-login'>로그인</Button>
</Link>
<Link to="/register">
<Button className='btn-login'>회원가입</Button>
</Link>
<br/><br/>
</div>
</>
  );
}

export default Member;
