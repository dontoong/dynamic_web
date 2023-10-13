import React, { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

function About_me() {

  useEffect(() => {
    AOS.init();
}, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행


    return (
    <div className="aboutme" data-aos = "fade-up" data-aos-duration="1000">
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  프로젝트 생성 날짜 : 2023년 09월 22일 오후 5시 42분<br />
  프로젝트 완료 날짜 : 2023년 10월 9일 오후 3시 6분 <br />
  <br />
  사용한 언어 : CSS, HTML, JS, PHP<br />
  <br />
  사용한 DB : MYSQL<br />
  <br />
  사용한 프레임워크 및 라이브러리<br />
  React, Bootstrap, AOS, MUI, Axios<br />
  <br /><br />

</div>

);
}
export default About_me;