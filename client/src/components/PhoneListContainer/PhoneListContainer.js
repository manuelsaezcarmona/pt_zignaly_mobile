/* eslint-disable arrow-parens */
import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loadAllPhones } from '../../redux/phones.actioncreators';
import { PhoneCard } from './PhoneCard';

export function PhoneListContainer() {
  const phones = useSelector(store => store.phones);
  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      dispatch(loadAllPhones());
      setloading(true);
    }, 2000);
  }, [dispatch]);

  return (
    <Container className="PhoneList container-fluid">
      {loading ? (
        phones.map(phone => <PhoneCard key={`pho-${phone._id}`} item={phone} />)
      ) : (
        <Spinner animation="border" />
      )}
    </Container>
  );
}
