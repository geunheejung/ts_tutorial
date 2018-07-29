// generic 사용 이유 - Type을 동적으로 할당하고 싶을 때 사용
// 같은 형태이지만 Type만 다를 경우 코드가 반복되서 생성됨
// 이럴 때 제네릭을 사용하여 타입을 동적으로 할당받자.
// 장점: any로 하면 any와 관련된 헬퍼, 도우미들이 제대로 작동안하는반면 제네릭은 잘 작동
/*
function hello<T>(message: T): T {
  return message;
}

hello<string>('Geuni');
hello<number>(35);

const strArr: string[] = [];
const strArr2: Array<string> = [];

function hi<T>(messages: T[]): T {
  return messages[0];
}

hi<string>(["g"]);

type HelloGeneric = <T>(message: T) => T;

const hello1: HelloGeneric = <T>(message: T) => {
  return message;
}*/

/*
class Cafe<T> {
  private _coffee: T;

  constructor(name: T) {
    this._coffee = name;
  }
}

const cafe = new Cafe<string>('Americano');
*/
/*
class Cafe<T extends string | number> {
  private _coffee: T;

  constructor(name: T) {
    this._coffee = name;
  }
}

class Apple<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

const apple = new Apple<string, number>(12, 15);

const cafe = new Cafe('');
*/

// enum Color {
//   Red = 1,
//   Blue = 3,
//   Green = 7
// }

// let c: Color = Color.Green;
// console.log(Color[1])

interface Test1 {
  name: string;
  age: number;
}

/* type lookup
인자로 받은 Object와 인자로 받은 Key가 있고
Object와 Key간의 관계를 알아내기 위해?
type lookup이라는게 생겼다.
오브젝트를 만들 때 타입으로 명시해준 인터페이스를 제네릭에서 key 인자에 명시해줄 부분에 extends 로 타입을 합쳐주는데 여기서 keyof 키워드를 사용해서 interface의 type을 정해주면
오브젝트는 IAinterface 로 만들어졌다면
key는 IAinterface에 명세된 key값만 사용할 수 있기때문에 인자로 받은 key값이 오브젝트에 존재하지 않는다면 에러가 난다.
즉 오브젝트와 키 간의 관계를 알 수 있다.
/*
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

const q: Test1 = {
  age: 35,
  name: 'geuni',
}

getProperty<string, d>(q, 'name');
setProperty(q, 'age', 'd');

class Stack<T> {
  private _data: T[] = [];

  push(item: T): void {
    this._data.push(item);
  }

  pop(): T | undefined {
    return this._data.pop();
  }
}

const stringStack = new Stack<string>();
stringStack.push("d");

function first<T>(arr: T[]): T {
  return arr[0];
}

first<string>(["d"]);

interface IType {
  age: string,
  name: string,
}
*/

interface ITest {
  name: string;
  age: number;
}

function getPro<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const testObj = {
  age: 20,
  name: 'geuni'
}

type q = keyof ITest;

/*
1. object의 타입이 명세된 interface를 만들어주고
2. object에 해당 interface를 명시해준다음
3. 함수에 제네릭을 정의해준다음 오브젝트와 매칭되는 제네릭 타입 인자를 keyof 로 해서 key의 제네릭 타입 인자에 extends 시켜주면
4. 타입추론에 의해 오브젝트와 매칭되는 제네릭 인자인 T에는 오브젝트를 만들면서 사용한 인터페이스에 명세된 타입을이 리터럴 타입으로 분리되고
5. 그 타입이 key 제네릭 인자에 extends되면서 인터페이스에 명세된 타입이 아닌 이상 key로 사용할 수 없게된다?
*/

getPro(testObj, 'name');
// extends 는 뜻 그대로 type끼리 상속하는것

