import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';

import AOS from "aos";
import "aos/dist/aos.css";

import './sub.css'

function The_One(props) {
    useEffect(() => {
        AOS.init();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

return (
    <div className="the_one">
        <Image className = "the_one_image" src="../image/the_one/the_one_blue.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="the_one_blue" data-aos = "fade-up" data-aos-duration="1000">
        <h2>더 원 블루</h2>
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2003년 9월 22일 출시<br /><br />
        타르 1.0mg<br /><br />
        니코틴 0.10mg<br /><br />
        </div>
        <h3>2번의 산소 처리로 부드러움 극대화</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "the_one_image" src="../image/the_one/the_one_change.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="the_one_change" data-aos = "fade-up" data-aos-duration="1000">
        <h2>더 원 체인지</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2014년 17월 17일 출시<br /><br />
        타르 1.0mg<br /><br />
        니코틴 0.10mg<br /><br />
        </div>
        <h3>살짝 사과맛이 느껴지는 담배, 순한 멘솔</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

    </div>
);
}

export default The_One;
