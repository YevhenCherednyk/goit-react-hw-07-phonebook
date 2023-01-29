import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from 'redux/filterSlice';
import { Label, Span, Input } from './Filter.styled';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectFilter);

  const onChange = query => {
    dispatch(setQuery(query));
  };

  const handleChange = evt => onChange(evt.target.value);

  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input type="text" value={query} onChange={handleChange} />
    </Label>
  );
};

export default Filter;
