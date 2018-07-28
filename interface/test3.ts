// interface IPerson {
//   name: string;
//   hello(): void;
// }

// class Person implements IPerson {
//   public name: string = "";

//   constructor(name: string) {
//     this.name = name;
//   }

//   public hello(): void {
//     console.log(`안녕하세요 ${this.name} 입니다.`);
//   }

//   public hi(): void {
//     console.log(`안녕하세요 ${this.name} 임.`);
//   }
// }

// const person: IPerson = new Person("Geuni");

// /*
// person을 선언할 때 Class를 타입으로 선언해주는것과,
// interface를 타입으로 선언해주는것의 차이는
// Class를 타입으로 선언해줄경우 해당 인스턴스의 모든 public
// 프로퍼티가 다 나오는 반면
// interface로 타입 선언을 해줄 경우 해당 인터페이스에 명세된 프로퍼티만 나온다.
// 즉 사용할 때도, 선언할 때도 인터페이스에 명세된 것만
// 사용하고 구현할거야 라는 인터페이스를 지킴
// */

// interface IHouse {
//   name: string;
//   floor?: number;
// }

// interface IApt extends IHouse {
//   city: string;
// }

// const apt: IApt = {
//   city: "Seoul",
//   name: "foorzio",
// };
// /*
// 함수의 타입 체크는 할당할때가 아니라 사용할때 한다는 점을 명시.
// */

// interface StringArray {
//   [index: number]: string;
// }

// const sa: StringArray = {}; // Optional 하다.
// // 밑에있는걸 사용하지 않아도 상관없다. 무조건 사용해야한다는 제약 없음.
// sa[100] = "백";

// interface StringDictionalryNo {
//   [index: string]: string;
//   // name: number; (x) 인덱서블 타입의 string 값을 가지기 때문에 number 를 필수로 끌어오면 에러
// }