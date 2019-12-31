import React, { useState } from 'react';

import { Layout, Circle, Square } from '../svg';

/**
 * checks whether point is in circle or not
 * @param  {[type]} p       point coords
 * @param  {[type]} circleC circleCenter
 * @param  {[type]} r       radius
 * @return boolean
 */
const isInCircle = (p, circleC, r) => Math.pow(p.x - circleC.x, 2) + Math.pow(p.y - circleC.y, 2) < Math.pow(r, 2);

export default props => {
  const r = 200;
  const offset = 30;
  const circleC = {x: offset+r, y: offset+r}
  const squareC = {x: offset, y: offset};

  const [ nPeas, setNpeas ] = useState(50);

  const peas = Array(nPeas).fill(0).map(_ => {
    const x = Math.random()*r*2 + offset;
    const y = Math.random()*r*2 + offset;

    return {x, y};
  });

  const l = peas
    .map(p => isInCircle(p, circleC, r))
    .filter(_ => _ === true).length;

  const piApprox = 4*l/nPeas;

  return <React.Fragment>
    <h2>Monte Carlo Simulation of PI</h2>
    <p>See <a href="https://en.wikipedia.org/wiki/Monte_Carlo_method#Overview">Monte Carlo method on wikipedia</a>.</p>
    <ul>
      <li># of peas: <input type="range" min="10" max="5000" value={nPeas} onChange={(e) => setNpeas(Number(e.target.value))}/><code>{nPeas}</code></li>
      {/*<li><button onClick={() => {setNpeas(1);setNpeas(nPeas)}}>Draw again</button></li>*/}
      <li>Pi appromximation: <code>{piApprox}</code> vs <code>{Math.PI}</code></li>
      <li>Pi precision: <code>{(100*(piApprox-Math.PI)/Math.PI).toFixed(2)}%</code></li>
    </ul>
    <Layout>
    <Circle r={r} coords={circleC}/>
    <Square w={r*2} coords={squareC}/>
    {peas.map((p, i) => <Circle stroke={isInCircle(p, circleC, r) ? 'red': 'blue'} key={i} r={.1} coords={p}/>)}

    </Layout>
  </React.Fragment>;
} 
