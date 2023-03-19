// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button?.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
// ==========================================

// let age: number;
// age = 50;
// let name: string;
// name = "Max";
// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;

// let callback = (a: number) => number;
// callback = (a) => {
//   return 100 + a;
// };
// ==========================================

// let anything: any;
// anything = -20;
// anything = "Text";
// anything = {};

// ==========================================

// let some: unknown;
// some = "Text";

// let str: string;

// if (typeof some === "string") {
//   str = some;
// }

// ==========================================

// let person: [string, number];
// person = ["Max", 21];

// ==========================================

// enum StatusLoading {
//   LOADING,
//   READY,
// }
// const page = {
//   status: StatusLoading.LOADING,
// };

// if (page.status === StatusLoading.LOADING) {
//   console.log("Loading");
// }

// if (page.status === StatusLoading.READY) {
//   console.log("Ready");
// }

// ==========================================

// let arg: string | number;
// let arg2: "enable" | "disable";
// ==========================================

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }
// ==========================================

// const Page: {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: string;
//     updateAt: string;
//   };
// };
// const page1 = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: "2021-01-01",
//     updateAt: "2021-05-01",
//   },
// };

// const page2 = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };
// ==========================================
abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}
  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("You can't come in.Door is close");
    }
    this.tenants.push(person);
  }
  abstract openDoor(key: Key): boolean;
}

class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }
    return (this.door = true);
  }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
