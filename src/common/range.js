import React from 'react';

export default props => {
  const { min, max, value, onChange } = props;

  return <input type="range" value={value} min={min} max={max} onChange={e => {
    const x = Number(e.target.value);
    onChange(x);
  }}/>
}