// // let b: string = "geuni";
// // const c: string = "ediay";
// // const d = "ediay";
// // // const는 재할당이 불가능하기 때문에 명시적으로 type 선언을 해주지 않으면 리터럴 타입이라 뜬다.
// // // 그에 반해 let은 명시적으로 type 선언을 해주지 않아도 타입을 유추하여서 타입을 준다.

// // let testType: number | string;
// // testType = "geuni";
// // testType = 1;

// // class Test {
// //   constructor() {
// //     // console.log('test');
// //   }
// // }

// // // new Test();

// // let n = 0;

// // n.toString();

// // let someValue: any = "this is a string";

// // let strLength1: number = (<string>someValue).length;
// // let strLength2: number = (someValue as string).length;

// // type StringWithNumber = string | number;

// // function sum(arg1: StringWithNumber): StringWithNumber {
// //   return arg1;
// // }

// // sum(1);

// interface Person {
//   name: string;
//   age?: number;
// }

// const person: Person = {
//   age: 20,
// }

// function hello(p: Person): void {
//   console.log(`안녕하세요 ${p.age} ${p.name}`);
// }

// hello({
//   age: 30,
//   name: "geuni"
// });