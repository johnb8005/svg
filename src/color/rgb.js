import React from 'react';

import Layout from '../svg/layout';
import { Trapeze } from '../svg';

import { toColor, toHex } from './utils'
import Range from '../common/range';

export default () => {
  const color0=0;
  const colorMax = (4 << 2 << 4) - 1;

  const [ red, setRed ] = React.useState(color0);
  const [ green, setGreen ] = React.useState(color0);
  const [ blue, setBlue ] = React.useState(color0);

  const color = toColor(red, green, blue);

  const fill = `rgb(${red}, ${green}, ${blue})`;

  return <>
    <code>HEX: #{toHex(color)} Number: {color}</code><br/>

    R: <Range value={red} min={color0} max={colorMax} onChange={setRed}/> {red}<br/>
    G: <Range value={green} min={color0} max={colorMax} onChange={setGreen}/> {green} <br/>
    B: <Range value={blue} min={color0} max={colorMax} onChange={setBlue}/>{blue} <br/>
    
    <Layout>
      <Trapeze p1={{x: 100, y: 50}} p2={{x: 50, y: 200}} p3={{x: 150, y: 200}} fill={fill}/>
    </Layout>
  </>;
}
