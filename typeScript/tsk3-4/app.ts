type UserType = {
    name: string;
    age: number;
    hello(): void;
};
class User implements UserType {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    hello(): void {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}
const userExample: UserType = new User("Rudolf_Again_its_me", 20);
userExample.hello();

type Point = {
    x: number;
    y: number;
};

function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point): number;

function distance( arg1: number | Point, arg2: number | Point, arg3?: number,  arg4?: number): number {
    if (typeof arg1 === "number" && typeof arg2 === "number" && typeof arg3 === "number" &&  typeof arg4 === "number") {
        const dx: number = arg3 - arg1;
        const dy: number = arg4 - arg2;
        return Math.sqrt(dx * dx + dy * dy);
    }
    if (typeof arg1 === "object" &&  typeof arg2 === "object") {
        const dx: number = arg2.x - arg1.x;
        const dy: number = arg2.y - arg1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    throw new Error("figovo s argumentami");
}
const d1: number = distance(0, 0, 3, 4);
console.log("Distance 1 =", d1);

const p1: Point = { x: 1, y: 2 };
const p2: Point = { x: 4, y: 6 };
const d2: number = distance(p1, p2);
console.log("Distance 2 =", d2);

export {};
