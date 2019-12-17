import React, { useState } from 'react';

import Segment from './segment';
import Point from './point';

function Layout(props) {
  const { children } = props;

  const onMouseMove = e => {
    //const x = e.screenX - 7;
    //const y = e.screenY - 86;

    //const c = { x, y };
    //console.log(c)
  }

  return <svg style={{border: '1px solid black'}} onMouseMove={onMouseMove} width="100%" height="800px">{children}</svg>;
}

const Circle = props => {
  const { r = 10, coords: {x, y} = {x: 0, y: 0} } = props;

  return <circle r={r} cx={x} cy={y} stroke="green" strokeWidth="1" fill="none"/>
}

const Rect = props => {
  const { w, h, coords: {x, y} = {x: 0, y: 0}} = props;
  return <rect width={w} height={h} x={x} y={y} style={{fill: 'none', strokeWidth:1, stroke: 'rgb(0,0,0)'}} />
}

const Square = props => {
  const { w, coords} = props;

  return <Rect w={w} h={w} coords={coords}/>
}

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

const Line = props => {
  return <line x1="303" y1="50" x2="140"  y2="208" stroke="orange" strokeWidth="1"/>;
}

const Rhombus = props => {
  const { c1, c2 } = props;

  const S = new Segment(c1, c2)

  const x3 = S.p1.x - S.r*Math.cos(S.alpha);
  const y3 = S.p1.y + S.r*Math.sin(S.alpha);
  const x4 = S.p2.x - S.r*Math.cos(S.alpha);
  const y4 = S.p2.y + S.r*Math.sin(S.alpha);

  const points = [
    [S.x1, S.y1].join(','),
    [S.x2, S.y2].join(','),
    [x4, y4].join(','),
    [x3, y3].join(','),
  ].join(' ');

  return <polygon points={points} style={{fill:'none', stroke:'purple', strokeWidth:1}} />
}

export default props => {
  const r = 25
  //const scoords = {x: r * 1.2, y: r*1.2};

  const [ x, setX ] = useState(144);
  const [ y, setY ] = useState(156);

  const coords = {x: 250, y: 50};
  const w = 53;
  //const scoords = getSquareCenter(w, coords);

  const onChange = (e, func) => {
    const v=Number(e.target.value);
    console.log(v);
    func(v);
  }

  return <React.Fragment>
    <input type="range" min={0} max={200} onChange={(e) => onChange(e, setX)} value={x}/>
    <input type="range" min={0} max={200} onChange={(e) => onChange(e, setY)} value={y} style={{marginTop: '50px', transform: 'rotate(270deg)'}}/>
    <Layout>
    <Eye r={r} w={w} coords={coords}/>
    <Eye r={r} w={w} coords={{x, y}}/>
    {/*<Circle r={200} coords={{x: 319, y: 233}}/>*/}
    <Line/>
    <Rhombus c1={new Point(50,70)} c2={new Point(100,90)}/>
  </Layout>
  </React.Fragment>
}
