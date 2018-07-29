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
function getPro(obj, key) {
    return obj[key];
}
var testObj = {
    age: 20,
    name: 'geuni'
};
/*
1. object의 타입이 명세된 interface를 만들어주고
2. object에 해당 interface를 명시해준다음
3. 함수에 제네릭을 정의해준다음 오브젝트와 매칭되는 제네릭 타입 인자를 keyof 로 해서 key의 제네릭 타입 인자에 extends 시켜주면
4. 타입추론에 의해 오브젝트와 매칭되는 제네릭 인자인 T에는 오브젝트를 만들면서 사용한 인터페이스에 명세된 타입을이 리터럴 타입으로 분리되고
5. 그 타입이 key 제네릭 인자에 extends되면서 인터페이스에 명세된 타입이 아닌 이상 key로 사용할 수 없게된다?
*/
getPro(testObj, 'name');
// extends 는 뜻 그대로 type끼리 상속하는것
