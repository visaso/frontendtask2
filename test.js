'use strict';

class Rectangle {
  constructor(width = 3, height = 7) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
  set widthSet(width) {
    this.width = width;
  }

}

let myRect = new Rectangle();

console.log(myRect.width);

myRect.widthSet = 15;
console.log(myRect.width);






