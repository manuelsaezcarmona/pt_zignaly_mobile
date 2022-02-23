/* eslint-disable object-curly-newline */
/* eslint-disable arrow-parens */
import { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

export function PhoneDetailComponent() {
  const phones = useSelector(store => store.phones);
  const [phoneState, setphone] = useState({});

  const { phoneID } = useParams();

  const phonearr = phones.filter(phone => phone._id === phoneID);
  useEffect(() => {
    setphone(phonearr[0]);
  }, []);

  return (
    <Container className="PhoneDetail">
      <Row>
        <Col xs={12} md={8}>
          <Image src={phoneState.imageURL} fluid />
        </Col>
        <Col xs={12} md={4}>
          <h2>{phoneState.title}</h2>
          <p>Brand: {phoneState.brand}</p>
          <p>color: {phoneState.color}</p>
          <p>price: {phoneState.price}</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="primary">Go to Gallery</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
