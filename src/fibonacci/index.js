import React, { useState, useEffect } from 'react';

import { Layout } from '../svg';
import { PathWSquare } from '../svg/path';

const goldenRatio = (1 + Math.sqrt(5))/2;

const getDirection = (i, offset = 0) => {
  if(i % 4 === offset % 4 || i % 4 === (offset + 1) % 4){
    return 1;
  }

  return -1;
}

const computeDirections = (nIter) => {
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

  return [init].concat(r);
}

const FiboPaths = props => {
  const { nIter, w, displayCircles, displaySquares, curvatureRatio } = props;
  return <Layout>
    {computeDirections(nIter).map((_, j) => <PathWSquare key={j} start={{x: 400 + _.dx1*w, y: 300 + _.dy1*w}} end={{x:400 + _.dx2*w, y: 300 + _.dy2*w}} displaySquares={displaySquares} displayCircles={displayCircles} curvatureRatio={curvatureRatio}/>)}
  </Layout>
}

export default props => {
  const [ curvatureRatio, setCurvatureRatio ] = useState(goldenRatio - 1);
  const [ displaySquares, setDisplaySquares ] = useState(true);
  const [ displayCircles, setDisplayCircles ] = useState(true);
  const [ nIter, setNIter ] = useState(21);
  const [ w, setW ] = useState(.4);
  const [ animationOn, setAnimationOn ] = useState(false);
  const wMax = 10;
  const wMin = .01;

  // https://stackoverflow.com/questions/46160461/how-do-you-set-the-document-title-in-react
  useEffect(() => {
   document.title = 'Fibonacci';
  }, []);

  const keepAnimationRunning = () => {
    const wInc = .1;
    const dt = 100;

    if (animationOn === true) {
      if (wMax > w) {
        setTimeout(() => {
          setW(w + wInc);
        }, dt);
      } else {
        setAnimationOn(false);
      }
    }
  }

  keepAnimationRunning()

  return <React.Fragment>
    <ul>
      <li>Curvature ratio: <input type="range" min={0} max={100} onChange={e => setCurvatureRatio(Number(e.target.value)/100)}/> <code>{curvatureRatio.toFixed(2)}</code></li>
      <li>Display square: <input type="checkbox" checked={displaySquares} onChange={() => setDisplaySquares(!displaySquares)}/></li>
      <li>Display circles: <input type="checkbox" checked={displayCircles} onChange={() => setDisplayCircles(!displayCircles)}/></li>
      <li># iterations: <input type="number" value={nIter} onChange={(e) => setNIter(Number(e.target.value))}/></li>
      <li>w: <input type="range" min={ wMin * 100 } max={wMax * 100} value={w*100} onChange={(e) => setW(Number(e.target.value/100))}/></li> 
      <li><button onClick={() => {setW(wMin);setAnimationOn(true)}}>Launch Animation</button></li>
    </ul>

    <FiboPaths nIter={nIter} displaySquares={displaySquares} displayCircles={displayCircles} curvatureRatio={curvatureRatio} w={w}/>
  </React.Fragment>;
} 
