import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';

import AOS from "aos";
import "aos/dist/aos.css";

import './sub.css'

function Raison(props) {
    useEffect(() => {
        AOS.init();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

return (
    <div className="raison">
        <Image className = "raison_image" src="../image/raison/raison_frenchblack.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="raison_frenchblack" data-aos = "fade-up" data-aos-duration="1000">
        <h2>레종 프렌치 블랙</h2>
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2015년 11월 18일 출시<br /><br />
        타르 3.0mg<br /><br />
        니코틴 0.20mg<br /><br />
        </div>
        <h3>캡슐 안 터트리면 담배 + 포도향 / 캡슐 터트리면 달달한 포도향</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "raison_image" src="../image/raison/raison_blue.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="raison_blue" data-aos = "fade-up" data-aos-duration="1000">
        <h2>레종 블루</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2002년 8월 19일 출시<br /><br />
        타르 3.0mg<br /><br />
        니코틴 0.30mg<br /><br />
        </div>
        <h3>순한 담배향, 부드럽고 구수한 맛</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "raison_image" src="../image/raison/raison_frenchyogo.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="raison_frenchyogo" data-aos = "fade-up" data-aos-duration="1000">
        <h2>레종 프렌치 요고</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2016년 4월 11일 출시<br /><br />
        타르 1.0mg<br /><br />
        니코틴 0.10mg<br /><br />
        </div>
        <h3>요거트 향의 독특한 향을 느낄 수 있는 프렌치 타입, 부드럽고 순한 1mg의 담배</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        <br /><br /><br />
        </div>

    </div>
);
}

export default Raison;
