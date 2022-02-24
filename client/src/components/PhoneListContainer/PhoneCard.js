import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function PhoneCard({ item }) {
  return (
    <div>
      <Link to={`/phone/${item._id}`} style={{ textDecoration: 'none' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={item.imageURL}
            alt={item.title}
            data-testid={item._id}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
