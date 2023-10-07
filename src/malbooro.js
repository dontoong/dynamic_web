import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';

import AOS from "aos";
import "aos/dist/aos.css";

import './sub.css'

function Malbooro(props) {
    useEffect(() => {
        AOS.init();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

return (
    <div className="malbooro">
        <Image className = "malbooro_image" src="../image/malbooro/malbooro_red.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="malbooro_red" data-aos = "fade-up" data-aos-duration="1000">
        <h2>말보로 레드</h2>
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        출시일 알수없음<br /><br />
        타르 8.0mg<br /><br />
        니코틴 0.70mg<br /><br />
        </div>
        <h3>용감함의 상징, 매우 독한 담배</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "malbooro_image" src="../image/malbooro/malbooro_gold.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="malbooro_gold" data-aos = "fade-up" data-aos-duration="1000">
        <h2>말보로 골드</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        출시일 알수없음<br /><br />
        타르 6.0mg<br /><br />
        니코틴 0.50mg<br /><br />
        </div>
        <h3>6mg에도 부드러운 목넘김, 묵직한 타격감<br /><br />
        유일한 군대 px에서 구매하는 수입담배</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "malbooro_image" src="../image/malbooro/malbooro_vista.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="malbooro_vista" data-aos = "fade-up" data-aos-duration="1000">
        <h2>말보로 비스타</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2021년 5월 13일 출시<br /><br />
        타르 3.0mg<br /><br />
        니코틴 0.20mg<br /><br />
        </div>
        <h3>망고맛, 더블캡슐, 시원한 맛</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        <br /><br /><br />
        </div>

        <Image className = "malbooro_image" src="../image/malbooro/malbooro_vistaforestmist.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="malbooro_vistaforestmist" data-aos = "fade-up" data-aos-duration="1000">
        <h2>말보로 비스타 포레스트 미스트</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2022년 4월 22일 출시<br /><br />
        타르 1.5mg<br /><br />
        니코틴 0.20mg<br /><br />
        </div>
        <h3>강한 딸기향, 달달한 담배, 한때 내가 피던 담배</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

    </div>
);
}

export default Malbooro;
