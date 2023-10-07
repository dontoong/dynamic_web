import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import AOS from "aos";
import "aos/dist/aos.css";

function Abroad_cigar(props) {
useEffect(() => {
    AOS.init();
}, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

return (
    <div className='card-align' data-aos="fade-up" data-aos-duration="1000">
        
        <Card style={{ width: '27.2rem' }}>
            <Card.Img className="card-img" variant="top" src="/image/mevius/mevius.jpg" />
            <Card.Body>
                <Card.Title>MEVIUS</Card.Title>
                <Card.Text>
                일본담배산업(Japan Tobacco, JT)의 담배 브랜드.<br></br><br></br>
                </Card.Text>
                <Link to ='/abroad_cigar/mevius'>
                <Button className="card-btn" variant="primary">더 보러 가기</Button>
                </Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '27.2rem' }}>
            <Card.Img className="card-img" variant="top" src="/image/malbooro/malbooro.jpg" />
            <Card.Body>
                <Card.Title>MALBOORO</Card.Title>
                <Card.Text>
                필립 모리스 사에서 제조하고 있는 담배 브랜드.<br></br><br></br>
                </Card.Text>
                <Link to ='/abroad_cigar/malbooro'>
                <Button className="card-btn" variant="primary">더 보러 가기</Button>
                </Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '27.2rem' }}>
            <Card.Img className="card-img" variant="top" src="/image/dunhill/dunhill.jpg" />
            <Card.Body>
                <Card.Title>DUNHILL</Card.Title>
                <Card.Text>
                영국의 담배 회사인 브리티쉬 아메리칸 토바코가 생산하는 담배 브랜드.
                </Card.Text>
                <Link to ='/abroad_cigar/dunhill'>
                <Button className="card-btn" variant="primary">더 보러 가기</Button>
                </Link>
            </Card.Body>
        </Card>
    </div>
);
}

export default Abroad_cigar;
