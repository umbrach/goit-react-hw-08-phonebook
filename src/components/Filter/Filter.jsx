import s from './Filter.module.css';
import { findUserAction } from '../../redux/slice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(findUserAction(e.currentTarget.value));
  };

  return (
    <p>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          onChange={changeFilter}
        ></input>
      </label>
    </p>
  );
};

export default Filter;
