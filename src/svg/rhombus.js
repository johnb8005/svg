import React from 'react';

import Segment from './segment';

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

export default Rhombus;