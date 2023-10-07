import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';

import AOS from "aos";
import "aos/dist/aos.css";

import './sub.css'

function This(props) {
    useEffect(() => {
        AOS.init();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

return (
    <div className="this">
        <Image className = "this_image" src="../image/this/this_origin.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="this_origin" data-aos = "fade-up" data-aos-duration="1000">
        <h2>디스(디스 오리진)</h2>
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        1994년 9월 12일 출시<br /><br />
        타르 6.5mg<br /><br />
        니코틴 0.60mg<br /><br />
        </div>
        <h3>강하고 비린 맛</h3><br />
        <h3 className ="price_low_4500">가격 : 4,000원</h3><br /><br />
        </div>

        <Image className = "this_image" src="../image/this/this_plus.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="this_plus" data-aos = "fade-up" data-aos-duration="1000">
        <h2>디스 플러스</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2014년 7월 17일 출시<br /><br />
        타르 5.5mg<br /><br />
        니코틴 0.55mg<br /><br />
        </div>
        <h3>바닐라향이 느껴지는 담배이자 한때 내가 피는 담배</h3><br />
        <h3 className ="price_low_4500">가격 : 4,100원</h3><br /><br />
        </div>

    </div>
);
}

export default This;
