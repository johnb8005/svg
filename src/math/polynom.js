export const equationFromSegment = (p1, p2) => {
  const m = (p2.y - p1.y)/(p2.x - p1.x);
  const q = p1.y - m * p1.x;

  return { m, q };
}

export const polyY = (x, {m, q}) => m*x + q;
export const polyX = (y, {m, q}) => (y - q ) / m;
