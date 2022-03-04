//Primitives
let age: number;
age = 12;

let userName: string;
userName = "Moniika";

let isWar: boolean;
isWar = true;

//Objects, Arrays, etc
let hobbies: string[]; //numbers[]
hobbies = ["Board games", "Travel", "Books"];

// let person: any;
let person: {
    name: string;
    age: number;
    city: string;
};
person = {
    name: "Monika",
    age: 36,
    city: "Kaunas",
};

//Union type - multiple types
let course: string | number;
course = 12123;
course = "react course";

//Type allies
type Animal = {
    name: string;
    age: number;
};

let dog: Animal;
let cat: Animal;

dog = {
    name: "Moka",
    age: 1,
};

//Function and types
function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value); //void like null
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3, 4];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "z");
