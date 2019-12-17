export default class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  toLin() {
    return [this.x, this.y].join(',');
  }
}

