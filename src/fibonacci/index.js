import React, { useState } from 'react';

import { Layout, Square, Circle } from '../svg';

const toStr = s => s.x + ' ' + s.y;


const getSenseX1 = (start, end) => {
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

const getSenseY2 = (start, end) => {
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

const getSenseX2 = (start, end) => {
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

const getSenseY1 = (start, end) => {
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

const goldenRatio = (1 + Math.sqrt(5))/2;

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

const PathWSquare = props => {
  const { start, end, curvatureRatio = .5, displaySquares = true, displayCircles = true } = props;

  const w = Math.abs(start.x - end.x);

  const coords = {x: Math.min(start.x, end.x), y: Math.min(start.y, end.y)};

  const square = displaySquares ? <Square w={w} coords={coords}/> : null;

  return <React.Fragment>
    {square}
    <Path start={start} end={end} curvatureRatio={curvatureRatio} displayCircles={displayCircles}/>
  </React.Fragment>
}

const getDirection = (i, offset = 0) => {
  if(i % 4 === offset % 4 || i % 4 === (offset + 1) % 4){
    return 1;
  }

  return -1;
}

export default props => {
  const [ curvatureRatio, setCurvatureRatio ] = useState(goldenRatio - 1);
  const [ displaySquares, setDisplaySquares ] = useState(true);
  const [ displayCircles, setDisplayCircles ] = useState(true);
  const [ nIter, setNIter ] = useState(21);
  const [ w, setW ] = useState(.4);

  const onChange = e => {
    const v = Number(e.target.value);

    setCurvatureRatio(v/100);
  }

  // init deltas
  let dx1  = 0;
  let dy1 = 0;
  let dx2 = 1;
  let dy2 = 1;

  const init = {dx1, dy1, dx2, dy2}

  // init fibonacci
  let f1 = 0;
  let f2 = 0;
  const r = Array(nIter).fill(0).map((_, j) => {
    // get the right offset
    const i = j + 1;
    // compute next fibonacci number
    const t = f2 === 0 ? 1 : f1 + f2;
    
    // get the different directions 
    dx1  += t*getDirection(i, 1);
    dy1 += t*getDirection(i);
    dx2 += (t+f2)*getDirection(i);
    dy2 += (t+f2)*getDirection(i, 3);

    f1 = f2
    f2 = t;

    return {dx1, dy1, dx2, dy2};
  });

  const renderPaths = [init].concat(r).map((_, j) => <PathWSquare key={j} start={{x: 600 + _.dx1*w, y: 300 + _.dy1*w}} end={{x:600 + _.dx2*w, y: 300 + _.dy2*w}} displaySquares={displaySquares} displayCircles={displayCircles} curvatureRatio={curvatureRatio}/>);

  return <React.Fragment>
    <ul>
      <li>Curvature ratio: <input type="range" min={0} max={100} onChange={onChange}/> <code>{curvatureRatio}/100</code></li>
      <li>Display square: <input type="checkbox" checked={displaySquares} onChange={() => setDisplaySquares(!displaySquares)}/></li>
      <li>Display circles: <input type="checkbox" checked={displayCircles} onChange={() => setDisplayCircles(!displayCircles)}/></li>
      <li># iterations: <input type="number" value={nIter} onChange={(e) => setNIter(Number(e.target.value))}/></li>
      <li>w: <input type="range" min={1} max={1000} value={w*100} onChange={(e) => setW(Number(e.target.value/100))}/></li> 
    </ul>

    <Layout>
      
      
      {renderPaths}
    </Layout>
  </React.Fragment>;
} 
