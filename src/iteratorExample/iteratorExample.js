// target 이 es3 라 해도 forEach 는 트랜스파일이 되지 않는다.
var CustomIterable = /** @class */ (function () {
    function CustomIterable() {
        this._array = ['first', 'second'];
    }
    CustomIterable.prototype[Symbol.iterator] = function () {
        var _this = this;
        var nextIndex = 0;
        return {
            next: function () {
                return {
                    value: _this._array[nextIndex++],
                    done: nextIndex < _this._array.length
                };
            }
        };
    };
    return CustomIterable;
}());
var cIterable = new CustomIterable();
for (var _i = 0, cIterable_1 = cIterable; _i < cIterable_1.length; _i++) {
    var item = cIterable_1[_i];
    console.log(item);
}
