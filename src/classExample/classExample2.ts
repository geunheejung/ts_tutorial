/* -- 1
interface ICar {
  honk(): void;
  getSpeed(): number;
}
setAccelerate(speed: number): void;

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

/* --- 2
interface IRectangle {
  area(): number;
}

class BaseObject {
  constructor(protected width: number = 0, protected length: number = 0) {
    this.width = width;
    this.length = length;
  }
}

class Rectangle extends BaseObject implements IRectangle {
  constructor(width: number, length: number) {
    super(width, length);
  }

  area(): number {
    return this.width * this.length;
  }
}

const rectangle: IRectangle = new Rectangle(10, 5);
console.log(rectangle.area());
*/

class Person1 {
  private _firstName: string = "";
}

