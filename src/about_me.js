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
  만든 날짜 : 2023-10-02 오전 11시 48분<br />
  사용한 언어 : CSS, HTML, JS<br />
  프레임워크 및 라이브러리 : React, Bootstrap, AOS, MUI, axios<br />
  앞으로 사용할 거 : MYSQL, PHP<br />
</div>

);
}
export default About_me;