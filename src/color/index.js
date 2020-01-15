import React from 'react';

import Layout from '../svg/layout';
import { Trapeze } from '../svg';

import { toHex } from './utils'
import Range from '../common/range';

export default () => {
  const color0=0;
  const colorMax = (4 << 2 << 4 << 4 << 4 << 4 << 4) - 1; // === 16**6

  const [ color, setColor ] = React.useState(color0);
  //const [ colorRed ] = React.useState(0);

  const fill = '#' + toHex(color);

  return <>
    <code>HEX: {toHex(color)} Number: {color}</code><br/>

    <Range value={color} min={color0} max={colorMax} onChange={setColor}/>
    
    <Layout>
      <Trapeze p1={{x: 100, y: 50}} p2={{x: 50, y: 200}} p3={{x: 150, y: 200}} fill={fill}/>
    </Layout>
  </>;
}
