// target 이 es3 라 해도 forEach 는 트랜스파일이 되지 않는다.

class CustomIterable implements Iterable<string> {
  private _array: Array<string> = ['first', 'second'];

  [Symbol.iterator]() {
    var nextIndex = 0;

    return {
      next: () => {
        return {
          value: this._array[nextIndex++],
          done: nextIndex < this._array.length,
        }
      }
    }
  }
}

const cIterable = new CustomIterable();

for (let item of cIterable) {
  console.log(item);
}