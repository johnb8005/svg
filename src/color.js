import React from 'react';

import Layout from '../svg/layout';
import { Circle, Line } from '../svg';

const Triangle = props => {
  const { p1, p2, p3, stroke='grey', fill = 'none' } = props;

  const points = [p1, p2, p3].map(p => `${p.x},${p.y}`).join(' ')


  return <polygon points={points} style={{fill, stroke, strokeWidth:1}} />
}



const Trapeze = props => {
  const { p1, p2, p3, stroke='grey', fill = 'none' } = props;

  const p4 = {x: (p3.x + (p2.x-p1.x)), y: p1.y}; 

  const points = [p1, p2, p3, p4].map(p => `${p.x},${p.y}`).join(' ')


  return <polygon points={points} style={{fill, stroke, strokeWidth:1}} />
}

const MovingDashLines = props => {
  const { y0, y1, x = 100, idx = 0, stroke = 'purple' } = props;

  const l = 8;
  const n = parseInt((y1-y0)/(2*l))+1

  const moveIdx = idx % (l*2)

  const middle = (new Array(n-1)).fill(0).map((_, i) => {
    return <Line key={i} p1={{x, y: y0+(2*i+1)*l + moveIdx}} p2={{x, y: y0+(2*i)*l + moveIdx}} stroke={stroke}/>
  })

  return <>
    <Line p1={{x, y: y0+(moveIdx>l ? moveIdx-l: 0)}} p2={{x, y: y0}} stroke={stroke}/>
    {middle}
    <Line p1={{x, y: y0+(n*2-1)*l }} p2={{x, y: y0+(n*2-2)*l + (moveIdx > l ? l : moveIdx)}} stroke={stroke}/>
  </>
}

export default () => {
  const h0=53;
  const hMax = 125;
  const [ h, setHeight ] = React.useState(h0);

  const x1FromY = y => {
    const m = (125-50)/(100-50);
    const q = 125 - m * 100;

    return (y - q)/m;
  }

  const x2FromY = y => {
    const m = (125-50)/(100-150);
    const q = 125 - m * 100;

    return (y - q)/m;
  }

  if(h<hMax) {
    setTimeout(() => {
      setHeight(h+1);
    }, 100);
  } else {
    setHeight(h0)
  }

  const hTrapeze = 250-h;

  const fill = '#de' + toHex(h*3) + '7';
  console.log(`h: ${h}, fill: ${fill}`)

  return <>
  <input type="range" value={h} min={h0} max={hMax} onChange={e => {
    const x = Number(e.target.value);

    setHeight(x);

  }}/>
      <Layout>
        <Triangle p1={{x: 50, y: 50}} p2={{x: 150, y: 50}}  p3={{x: 100, y: 125}} />
        <Triangle p1={{x: 50, y: 200}} p2={{x: 150, y: 200}}  p3={{x: 100, y: 125}} />
        <Triangle p1={{x: x1FromY(h), y: h}} p2={{x: x2FromY(h), y: h}}  p3={{x: 100, y: 125}} fill={fill}/>
        <Trapeze p1={{x: x2FromY(hTrapeze), y: hTrapeze}} p2={{x: 50, y: 200}} p3={{x: 150, y: 200}} fill={fill}/>
        <MovingDashLines idx={h+3} y0={125} y1={200}/>
      </Layout>
  </>;
}

const toHex = i => {
  const a = i%16;
  const b = (i >> 4)%16;
  const c = (i >> 8)%16;

  const toUnitHex = i => {
    if (i < 10) {
      return String(i);
    }

    const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    return arr[i-10];
  }

  return  toUnitHex(c) + toUnitHex(b) + toUnitHex(a);
}
