// function Person(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.getFullName = function() {
// 		return this.firstName + " " + this.lastName;
// 	}
// }

// var p1 = new Person("Mihai", "Cristescu");
// var p2 = new Person("Marian", "Ionescu");


class Animal {
    #_name = "name";
    constructor(name) {
        this.#_name = name;
    }

    get name() {
        return this.#_name;
    }

    set name(name) {
        if (name.length > 3) {
            this.#_name = name;
        }
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    getDogInfo() {
        console.log(`Dog name: ${super.name}, age: ${this.age}`);
    }
}

let bailey = new Dog("Bailey", 2);
console.log(bailey.name);
bailey.name = "abcd";
console.log(bailey.name);
bailey.getDogInfo();



// function variableParams(a, b, c = 0) {
//     console.log(a + b + c);
// }

// variableParams(1, 2);
// variableParams(1, 2, 3);
// let numbers = [1,2,3];

// console.log("Normal function call");
// variableParams(numbers[0], numbers[1], numbers[2]);

// console.log("Spread");
// variableParams(...numbers);

// function restParams(a, ...rest) {
//     console.log(a);
//     console.log(rest);
// }

// restParams(1);
// restParams(1,2,3,4,5);