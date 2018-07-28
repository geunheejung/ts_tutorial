/* -- 1
interface ICar {
  honk(): void;
  setAccelerate(speed: number): void;
  getSpeed(): number;
}

class Car implements ICar {
  private _name: string = "BENZ";
  private _speed: number = 0;

  constructor(name: string) {
    this._name = name;
  }

  public honk(): void {
    console.log('부우우웅');
  }

  getSpeed(): number {
    return this._speed;
  }

  public setAccelerate(speed: number): void {
    this._speed += speed;
  }
}

const car: ICar = new Car("BENZ");
// public만 인터페이스에 명세해주나봄
car.honk();
console.log(car.getSpeed());
car.setAccelerate(10);
console.log(car.getSpeed());
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseObject = /** @class */ (function () {
    function BaseObject(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        return _super.call(this, width, length) || this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(10, 5);
console.log(rectangle.area());
