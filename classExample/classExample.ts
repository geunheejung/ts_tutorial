// const c = (d: any) => {
//   console.group('----------------');
//   console.log(d);
//   console.groupEnd();
// }

// class Person {
//   protected _name: string = "Geuni";
//   private _age: number | undefined = undefined;
//   // 생성자 명시 안해주면 Default 생성자가 불려진다.
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
// }

// class Child extends Person {
//   constructor() {
//     super("Geuni");

//     this._name = '아들';
//   }

//   getName() {
//     // 부모 클래스인 Person의 _name 프로퍼티를 private로 할 경우 접근 불가
//     //  접근제어자를 protected 로 할 경우 접근 가능
//     return this._name;
//   }
// }
// const person: Child = new Child();

class Person {
  constructor(protected _name: string, private _age: number) {

  }

  hello = (): void => {
    console.log(this._name);
  }
}
const person: Person = new Person('Geuni', 19);

class Child extends Person {

  constructor() {
    super('Bibi', 5);
  }
}
const child: Child = new Child();
console.log(child.hello())



/*
1. 생성자 함수가 없으면, 디폴트 생성자
2. 클래스의 프로퍼티 혹은 멤버 변수가 정의되어 있지만,
 값을 대입하지 않으면 undefined
=> Object에 프로퍼티가 아예 존재 X
3. 접근제어자는 public이 Default
----
1. private 으로 설정된 프로퍼티는 오브젝트 dot 으로 프로퍼티 접근 불가
----
private 와 protected 차이
1. 부모에서 private 으로 설정된 프로퍼티는 상속을 받은 자식에서도 접근 불가
2. 부모에서 protected 로 설정된 프로퍼티는 상속을 받은 자식에서 접근 가능.
3. 상속을 받은 자식 클래스에서 부모 클래스에 this를 통해 접근하려면 생성자에서 super();
*/

