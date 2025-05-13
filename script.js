let name = "Phi";

function greet1(name) {
  return "Hello " + name;
}

console.log(greet1(name));

if (name == "Phi") {
  console.log("Admin");
} else {
  console.log("User");
}

let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}

function double(x) {
  return x * 2;
}

const add = (a, b) => a + b;

let number;
function Multi(number = 1) {
  console.log(number * 2);
}
Multi(21);

const greet = function (name) {
  console.log("Hello " + name);
};
greet("Phi");

function countDown(n) {
  if (n > 0) {
    console.log(n--);
    countDown(n);
  }
}
countDown(10);

let array = [1, 2, 3];
console.log(array);

let user = { name: "Alice", age: 25 };

function sum(...array) {
  return array.reduce((a, b) => a + b);
}
console.log(sum(...array));

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);

let [a, b] = [1, 2];

console.log(a, b);

let { n, age } = { n: "Phi", age: 19 };
console.log(n, age);

function greaterThan(n) {
  return function (m) {
    return m > n;
  };
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

[1, 2, 3].forEach((n) => console.log(n));

let doubled = [1, 2, 3].map((n) => n * 2);
console.log(doubled);

let evens = [1, 2, 3, 4].filter((n) => n % 2 === 0);
console.log(evens);

let numbers = [1, 2, 3, 4];
let sum1 = numbers.reduce((a, b) => a + b);
console.log(sum1);

console.log("Z".charCodeAt(0));
console.log(String.fromCharCode(66));

let arrays = [[1, 2], [3, 4], [5]];
let flat = arrays.reduce((a, b) => a.concat(b), []);
console.log(flat);

user = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};
user.greet();

function Person(name) {
  this.name = name;
}
let p = new Person("Tom");

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} speaks.`);
  }
}
let p1 = new Animal("Dog");
p1.speak();

let obj = Object.create({ a: 1 });
obj.a = 2;
console.log(obj.a);
console.log(obj.__proto__.a);

let map = new Map();
map.set("age", 25);
console.log(map.get("age"));

console.log([1, 2, 3].toString());

let sym = Symbol("id");
obj = {};
obj[sym] = 123;
console.log(obj[sym]);
console.log(Object.getOwnPropertySymbols(obj));

let iterable = {
  from: 1,
  to: 10,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        }
        return { done: true };
      },
    };
  },
};
for (let num of iterable) {
  console.log(num);
}

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  get area() {
    return this._width * this._height;
  }
  static description() {
    return "A rectangle shape";
  }
}

let rect = new Rectangle(10, 20);
console.log(rect.area);

class Animal1 {
  speak() {
    console.log("Animal sound");
  }
}
class Dog extends Animal1 {
  speak() {
    super.speak();
    console.log("Bark");
  }
}
let dog = new Dog();
dog.speak();

console.log(dog instanceof Dog);
