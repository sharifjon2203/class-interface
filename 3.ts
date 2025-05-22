function identity<T>(value: T): T {
    return value
}


class Stack<T> {
    private elements: T[] = []

    add(item: T) {
        this.elements.push(item)
    }
    getAll() {
        return this.elements
    }
}

let stack = new Stack<number>()

stack.add(identity(78))
stack.add(identity(65))

console.log(stack.getAll())