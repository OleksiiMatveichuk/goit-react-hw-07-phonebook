import { useEffect } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilterContact,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContact } from 'redux/slice';
import { fetchContacts } from 'service/phoneboockAPI';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterContact);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  console.log('contacts', contacts);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filterValue.toLowerCase())
  // );

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
      {contacts.map((el, i) => (
        <ListGroup.Item as="li" key={i + 1}>
          <p>
            {el.name}: {el.phone}
          </p>
          <Button
            variant="secondary"
            type="button"
            name={el.id}
            onClick={() => dispatch(deleteContact(el.id))}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
