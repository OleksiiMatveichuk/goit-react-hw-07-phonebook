import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterContact } from 'redux/selectors';
import { deleteContact } from 'redux/slice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterContact);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ListGroup as="ul">
      {filteredContacts.map((el, i) => (
        <ListGroup.Item as="li" key={i + 1}>
          <p>
            {el.name}: {el.number}
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
