import React from 'react';

import Layout from './layout';
import Segment from './segment';
import Point from './point';
import Rhombus from './rhombus';

export const Circle = props => {
  const { r = 10, coords: {x, y} = {x: 0, y: 0}, stroke='green' } = props;

  return <circle r={r} cx={x} cy={y} stroke={stroke} strokeWidth="1" fill="none"/>
}

export const Rect = props => {
  const { w, h, coords: {x, y} = {x: 0, y: 0}} = props;
  return <rect width={w} height={h} x={x} y={y} style={{fill: 'none', strokeWidth:1, stroke: 'rgb(0,0,0)'}} />
}

export const Square = props => {
  const { w, coords} = props;

  return <Rect w={w} h={w} coords={coords}/>
}

export const Line = props => {
  const { p1, p2, stroke= 'orange' } = props;
  return <line x1={p1.x} y1={p1.y} x2={p2.x}  y2={p2.y} stroke={stroke} strokeWidth="1"/>;
}

export const Triangle = props => {
  const { p1, p2, p3, stroke='grey', fill = 'none' } = props;

  const points = [p1, p2, p3].map(p => `${p.x},${p.y}`).join(' ')


  return <polygon points={points} style={{fill, stroke, strokeWidth:1}} />
}

export const Trapeze = props => {
  const { p1, p2, p3, stroke='grey', fill = 'none' } = props;

  const p4 = {x: (p3.x + (p2.x-p1.x)), y: p1.y}; 

  const points = [p1, p2, p3, p4].map(p => `${p.x},${p.y}`).join(' ')


  return <polygon points={points} style={{fill, stroke, strokeWidth:1}} />
}

/**
 * gives the impression of a road moving underneath you
 */
export const MovingDashLines = props => {
  const { y0, y1, l = 8, x = 100, idx = 0, stroke = 'purple' } = props;

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

export { Layout, Segment, Point, Rhombus };