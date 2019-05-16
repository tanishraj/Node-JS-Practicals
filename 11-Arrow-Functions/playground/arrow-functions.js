// Fat Arrow Function Expression
var square = x => x * x;
console.log(square(9));

// Creating Fat Arrow Function on obejcts
var user = {
    name: 'Andrew',
    sayHi: () => {
        // Fat arrow functions have their own this reference inside its block
        console.log(`Hi, My Name is ${this.name}`);
    },
    sayHiAlt() {
        console.log(`Hi, My Name is ${this.name}`);
    }
}

user.sayHi();
user.sayHiAlt();
