class Segment {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;

    this.d1 = p1.x - p1.x;
    this.d2 = p2.y - p2.y;

    this.alpha = Math.atan2(this.d1, this.d2);
    this.r = Math.sqrt(this.d1**2 + this.d2**2);
  }
}

export default Segment;