import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import AOS from "aos";
import "aos/dist/aos.css";

function Elec_cigar(props) {
    useEffect(() => {
        AOS.init();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

    return (
    <div className='card-align' data-aos="fade-up" data-aos-duration="1000">

        <Card style={{ width: '27.2rem' }}>
            <Card.Img className="card-img" variant="top" src="/image/miix/miix.jpg" />
            <Card.Body>
                <Card.Title>MIIX</Card.Title>
                <Card.Text>
                KT&G에서 발매한 궐련형 전자담배 디바이스 시리즈의 브랜드 lil의 하이브리드 전용 담배.
                </Card.Text>
                <Link to ='/elec_cigar/miix'>
                <Button className="card-btn" variant="primary">더 보러 가기</Button>
                </Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '27.2rem' }}>
            <Card.Img className="card-img" variant="top" src="/image/neo/neo.jpg" />
            <Card.Body>
                <Card.Title>NEO</Card.Title>
                <Card.Text>
                영국의 담배 회사인 브리티쉬 아메리칸 토바코가 생산하는 궐련형 전자담배 GLO의 담배.
                </Card.Text>
                <Link to ='/elec_cigar/neo'>
                <Button className="card-btn" variant="primary">더 보러 가기</Button>
                </Link>
            </Card.Body>
        </Card>

      </div>

);
}
export default Elec_cigar;
