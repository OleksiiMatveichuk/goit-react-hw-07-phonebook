import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectIsLoading } from 'redux/selectors';

import { deleteContacts, fetchContacts } from 'service/phoneboockAPI';
export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListGroup as="ul">
      {isLoading && (
        <ListGroup.Item>
          <p>Loading...</p>
        </ListGroup.Item>
      )}
      {filteredContacts.map((el, i) => (
        <ListGroup.Item as="li" key={i + 1}>
          <p>
            {el.name}: {el.number}
          </p>
          <Button
            variant="secondary"
            type="button"
            name={el.id}
            onClick={() => dispatch(deleteContacts(el.id))}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
