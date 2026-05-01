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
const userExample = new User("Rudolf_Again_its_me", 20);
userExample.hello();
function distance(arg1, arg2, arg3, arg4) {
    if (typeof arg1 === "number" && typeof arg2 === "number" && typeof arg3 === "number" && typeof arg4 === "number") {
        const dx = arg3 - arg1;
        const dy = arg4 - arg2;
        return Math.sqrt(dx * dx + dy * dy);
    }
    if (typeof arg1 === "object" && typeof arg2 === "object") {
        const dx = arg2.x - arg1.x;
        const dy = arg2.y - arg1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    throw new Error("Invalid arguments");
}
const d1 = distance(0, 0, 3, 4);
console.log("Distance 1 =", d1);
const p1 = { x: 1, y: 2 };
const p2 = { x: 4, y: 6 };
const d2 = distance(p1, p2);
console.log("Distance 2 =", d2);
export {};
