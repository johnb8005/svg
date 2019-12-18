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
  const { p1, p2 } = props;
  return <line x1={p1.x} y1={p1.y} x2={p2.x}  y2={p2.y} stroke="orange" strokeWidth="1"/>;
}

export { Layout, Segment, Point, Rhombus };