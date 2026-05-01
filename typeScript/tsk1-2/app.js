class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}
const user1 = new User("Rudolf", 20);
user1.hello();
export {};
