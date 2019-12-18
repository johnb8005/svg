import React from 'react';

import { Circle, Square } from '../svg';

const getSquareCenter = (w, coords) => {
  const x = coords.x + w/2;
  const y = coords.y + w/2;
  return {x, y};
}

const Eye = (props) => {
  const { w, coords } = props;
  const scoords = getSquareCenter(w, coords);

  return <React.Fragment>
    <Circle r={Math.sqrt(2)*w/2} coords={scoords}/>
    <Circle r={w/2} coords={scoords}/>
    <Circle r={Math.sqrt(2)*w} coords={coords}/>
    <Circle r={Math.sqrt(2)*w} coords={getSquareCenter(w, scoords)}/>
    <Square w={w} coords={coords}/>
  </React.Fragment>
}

export default Eye;