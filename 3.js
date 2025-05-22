function identity(value) {
    return value;
}
var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    Stack.prototype.add = function (item) {
        this.elements.push(item);
    };
    Stack.prototype.getAll = function () {
        return this.elements;
    };
    return Stack;
}());
var stack = new Stack();
stack.add(identity(78));
stack.add(identity(65));
console.log(stack.getAll());
