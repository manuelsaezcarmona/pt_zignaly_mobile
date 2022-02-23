import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function PhoneCard({ item }) {
  return (
    <div>
      <Link to={`/phone/${item._id}`}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.imageURL} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price} €</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
