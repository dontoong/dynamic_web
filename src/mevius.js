import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';

import AOS from "aos";
import "aos/dist/aos.css";

import './sub.css'

function Mevius(props) {
    useEffect(() => {
        AOS.init();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

return (
    <div className="mevius">
        <Image className = "mevius_image" src="../image/mevius/mevius_original.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="mevius_original" data-aos = "fade-up" data-aos-duration="1000">
        <h2>메비우스 오리지널</h2>
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        1977년 1월 1일 출시<br /><br />
        타르 8.0mg<br /><br />
        니코틴 0.70mg<br /><br />
        </div>
        <h3>스카이블루보다 상위호환의 흡연감, 거친 목넘김,<br /><br />
        저타르의 스카이블루가 밋밋하게 느껴진다면 피워볼만한 담배</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "mevius_image" src="../image/mevius/mevius_skyblue.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="mevius_skyblue" data-aos = "fade-up" data-aos-duration="1000">
        <h2>메비우스 스카이블루</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        1985년 1월 1일 출시<br /><br />
        타르 6.0mg<br /><br />
        니코틴 0.50mg<br /><br />
        </div>
        <h3>갑과 팩으로 나뉜 담배, 매우 거친 목넘김, 쇠맛</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        <br /><br /><br />
        </div>

        <Image className = "mevius_image" src="../image/mevius/mevius_windblue.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="mevius_windblue" data-aos = "fade-up" data-aos-duration="1000">
        <h2>메비우스 윈드블루 업</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        1989년 1월 1일 출시<br /><br />
        타르 3.0mg<br /><br />
        니코틴 0.30mg<br /><br />
        </div>
        <h3>스카이블루보다 부르더운 목넘김</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

    </div>
);
}

export default Mevius;
