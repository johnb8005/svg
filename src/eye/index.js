import React, { useState } from 'react';

import { Layout, Point, Line, Rhombus } from '../svg';
import { equationFromSegment, polyY, polyX } from '../math/polynom';

import Eye from './eye'

export default props => {
  const r = 25;

  const coords = {x: 400, y: 100};
  const w = 53;
  
  const s1 = {x: coords.x + w, y: coords.y};
  const s2 = {x: coords.x, y: coords.y + w};

  const { m, q } = equationFromSegment(s1, s2);

  const s3 = {x: 0}
  s3.y = polyY(s3.x, { m, q });
  const s4 = {y: 0}
  s4.x = polyX(s4.y, { m, q });

  const x0 = 244;
  const [ x, setX ] = useState(x0);
  const [ y, setY ] = useState(polyY(x0, { m, q })-w);

  const onChange = (e, func) => {
    const v = Number(e.target.value);
    setX(v);
    const y = polyY(v, {m, q});
    setY(y - w);
  }

  return <React.Fragment>
    <input style={{width: `${s4.x - s3.x}px`}} type="range" min={s3.x} max={s4.x} onChange={(e) => onChange(e, setX)} value={x}/>
    <code>({x}, {y})</code>
    {/*<input type="range" min={0} max={200} onChange={(e) => onChange(e, setY)} value={y} style={{marginTop: '50px', transform: 'rotate(270deg)'}}/>*/}
    <Layout>
      <Eye r={r} w={w} coords={coords}/>
      <Eye r={r} w={w} coords={{x, y}}/>
      {/*<Circle r={200} coords={{x: 319, y: 233}}/>*/}
      <Line p1={s4} p2={s3}/>
      <Rhombus c1={new Point(50,70)} c2={new Point(100,90)}/>
    </Layout>
  </React.Fragment>
}
