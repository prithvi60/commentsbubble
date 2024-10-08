import React, { useState } from 'react';

const InputSearch = (props) => {
  const [value, setValue] = useState(props.defaultValue || '');

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (value && value.length > 0 && props.onSearch) {
        props.onSearch(value);
        if (props.clearOnSearch) {
          setValue('');
        }
      } else {
        alert('Please type something');
      }
    }
  };

  const onChange = (event) => {
    event.preventDefault();
    const newValue = event.target.value;
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <input
      className="simpleInput"
      style={props.style}
      onKeyPress={onKeyPress}
      onChange={onChange}
      value={value}
      placeholder={props.placeholder || ''}
      autoFocus={props.autoFocus || false}
    />
  );
};

export default InputSearch;