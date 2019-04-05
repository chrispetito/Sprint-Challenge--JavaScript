// 1. Copy and paste your prototype in here and refactor into class syntax.
//function CuboidMaker(attributes) {
//    this.length = attributes.length;
//    this.width = attributes.width;
//    this.height = attributes.height;
//  }
//  CuboidMaker.prototype.volume = function() {
//    return this.length * this.width * this.height;
//  }
//  CuboidMaker.prototype.surfaceArea = function() {
//    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//  }
  
class CuboidMaker2 {
    constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
};

const cuboid2 = new CuboidMaker({
    'length': 4,
    'width': 5,
    'height': 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(attributes) {
        super(attributes);
        this.edge = attributes.edge;
    }
    cubeVolume() {
        return Math.pow(this.edge, 3);
    }
    cubeSurfaceArea() {
        return 6 * (Math.pow(this.edge, 2));
    }
}
const cube = new CubeMaker({
    'edge': 4
})

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());
