import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';

import AOS from "aos";
import "aos/dist/aos.css";

import './sub.css'

function Dunhill(props) {
    useEffect(() => {
        AOS.init();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

return (
    <div className="dunhill">
        <Image className = "dunhill_image" src="../image/dunhill/dunhill_6mg.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="dunhill_6mg" data-aos = "fade-up" data-aos-duration="1000">
        <h2>던힐 6MG</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        출시일 알수없음<br /><br />
        타르 6.0mg<br /><br />
        니코틴 0.60mg<br /><br />
        </div>
        <h3>굉장히 씁쓸한 맛, 던힐 라이트라고도 불린다.</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "dunhill_image" src="../image/dunhill/dunhill_3mg.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="dunhill_3mg" data-aos = "fade-up" data-aos-duration="1000">
        <h2>던힐 3MG</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        출시일 알수없음<br /><br />
        타르 3.0mg<br /><br />
        니코틴 0.30mg<br /><br />
        </div>
        <h3>6MG가 강하고, 1MG가 약할 때 찾는 담배</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        <br /><br /><br />
        </div>

        <Image className = "dunhill_image" src="../image/dunhill/dunhill_1mg.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="dunhill_1mg" data-aos = "fade-up" data-aos-duration="1000">
        <h2>던힐 1MG</h2>
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        출시일 알수없음<br /><br />
        타르 1.0mg<br /><br />
        니코틴 0.10mg<br /><br />
        </div>
        <h3>1mg 치고 묵직한 편</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "dunhill_image" src="../image/dunhill/dunhill_finecut1mg.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="dunhill_finecut1mg" data-aos = "fade-up" data-aos-duration="1000">
        <h2>던힐 파인컷 1MG</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        출시일 알수없음<br /><br />
        타르 1.0mg<br /><br />
        니코틴 0.10mg<br /><br />
        </div>
        <h3>없지 않아 있는 매캐한 맛, 은근 인기가 있는 담배</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

    </div>
);
}

export default Dunhill;
