/* eslint-disable arrow-parens */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadAllPhones } from '../../redux/phones.actioncreators';

export function PhoneListContainer() {
  const phones = useSelector(store => store.phones);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllPhones());
  }, [dispatch]);

  return (
    <div className="PhoneList container-fluid">
      <p>Prueba de Phones</p>
      <p>{phones.length}</p>
    </div>
  );
}
