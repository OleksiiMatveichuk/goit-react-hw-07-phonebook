import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Finde contacts by name</p>
      <InputGroup
        className="mb-3"
        style={{ maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type="text"
          name="filter"
          onChange={e => dispatch(updateFilter(e.target.value))}
        />
      </InputGroup>
    </>
  );
};
