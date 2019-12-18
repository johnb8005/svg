import React from 'react';
import { Square, Circle } from './index';
//import { toStr, getSenseX1, getSenseX2, getSenseY1, getSenseY2, goldenRatio } from './utils';

export const toStr = s => s.x + ' ' + s.y;

export const getSenseX1 = (start, end) => {
  // #2
  if (start.x > end.x && start.y < end.y) {
    return -1
  }

  // #4
  if (start.x < end.x && start.y > end.y) {
    return 1
  }

  return 0;
}

export const getSenseY2 = (start, end) => {
  // #2
  if (start.x > end.x && start.y < end.y) {
    return -1
  }

  // #4
  if (start.x < end.x && start.y > end.y) {
    return 1
  }

  return 0;
}

export const getSenseX2 = (start, end) => {
  // #1
  if (start.x < end.x && start.y < end.y) {
    return 1
  }

  // # 3
  if (start.x > end.x && start.y > end.y) {
    return -1
  }

  return 0;
}

export const getSenseY1 = (start, end) => {
  // #1
  if (start.x < end.x && start.y < end.y) {
    return -1
  }

  // # 3
  if (start.x > end.x && start.y > end.y) {
    return 1
  }

  return 0;
}

const Path = props => {
  const { start, end, curvatureRatio = .5, displayCircles = true } = props;

  const r = Math.abs(start.x - end.x);
  const curvature = r*curvatureRatio;

  const senseX1 = getSenseX1(start, end);
  const senseX2 = getSenseX2(start, end);
  const senseY1 = getSenseY1(start, end);
  const senseY2 = getSenseY2(start, end);

  const c1 = {x: start.x + senseX1*curvature, y: start.y + senseX2*curvature};
  const c2 = {x: end.x + senseY1*curvature , y: end.y + senseY2*curvature};

  const circles = displayCircles ? <React.Fragment>
    <Circle r={3} coords={start} stroke="blue"/>
    <Circle r={3} coords={end} stroke="red"/>
    <Circle r={3} coords={c1}/>
    <Circle r={3} coords={c2}/>
  </React.Fragment> : null;

  return <React.Fragment>
    {circles}
    <path d={`M ${toStr(start)} C ${toStr(c1)}, ${toStr(c2)}, ${toStr(end)}`} stroke="black" fill="transparent"/>
  </React.Fragment>;
}

export default Path;

export const PathWSquare = props => {
  const { start, end, curvatureRatio = .5, displaySquares = true, displayCircles = true } = props;

  const w = Math.abs(start.x - end.x);

  const coords = {x: Math.min(start.x, end.x), y: Math.min(start.y, end.y)};

  const square = displaySquares ? <Square w={w} coords={coords}/> : null;

  return <React.Fragment>
    {square}
    <Path start={start} end={end} curvatureRatio={curvatureRatio} displayCircles={displayCircles}/>
  </React.Fragment>
}