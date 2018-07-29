// interface IPerson {
//   age?: number,
//   name: string,
// }

// const person: IPerson = {
//   name: "Mark",
// };

// const personList: IPerson[] = [];

// const setPerson = (personInfo: IPerson): void => {
//   personList.push(personInfo);
// };

// setPerson(person);

// interface IAnimal {
//   name: string;
//   [index: string]: string;
// }

// const cat: IAnimal = {
//   name: "navi",
// };

// cat.house = "d";
// cat.house1 = "b";

// interface IAnimal2 {
//   name: string;
//   [index: number]: IPerson;
// }

// const animal2: IAnimal2 = {
//   name: "geuni",
// };
// animal2[100] = {
//   age: 26,
//   name: "navi",
// };

// interface IBodyParams {
//   getParam(): string;
// }

// const bodyParams: IBodyParams = {
//   getParam(): string {
//     return "Geuni";
//   },
// };

// interface IHouse {
//   name: string;
//   hello(): string;
// }

// class House implements IHouse {
//   public name: string = "";

//   constructor(name: string) {
//     this.name = name;
//   }

//   public hello(): string {
//     return `안녕하세요 ${this.name} 님`;
//   }
// }

// const house: House = new House("Geuni");

// interface ISquareConfig {
//   readonly color?: string;
//   readonly width?: number;
// }

// const createSquare = (config: ISquareConfig): { color: string; area: number } => {
//   config.color = "yellow";

//   return {
//     area: 50,
//     color: "red",
//   };
// };

// let mySquare = createSquare({ color: "black", width: 50 });

// interface IBodyParamConfig {
//   store_id?: string;
//   user_id?: number;
//   [propName: string]: string | number | undefined;
// }

// const createBodyParams = (body: IBodyParamConfig): { store_id: string | any; user_id: number | any } => {
//   body.role_id = "geuni";

//   const result = {
//     store_id: body.store_id,
//     user_id: body.user_id,
//   };

//   return result;
// };

// createBodyParams({
//   store_id1: "445",
//   user_id: 95580,
// } as IBodyParamConfig);
