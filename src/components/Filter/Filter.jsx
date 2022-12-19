import { useDispatch } from 'react-redux';
import { findUserAction } from 'redux/filter/slice';
import TextField from '@mui/material/TextField';
const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(findUserAction(event.target.value));
  };
  return (
    <>
      <TextField
        type="text"
        label="Enter contact name"
        onChange={handleChangeFilter}
        size="small"
        id="outlined-required"
        helperText="Find contact by Name"
      />
    </>
  );
};

export default Filter;

