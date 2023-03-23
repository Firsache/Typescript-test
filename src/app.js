var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
// ==================Lesson 2========================
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
var StatusLoading;
(function (StatusLoading) {
    StatusLoading[StatusLoading["LOADING"] = 0] = "LOADING";
    StatusLoading[StatusLoading["READY"] = 1] = "READY";
})(StatusLoading || (StatusLoading = {}));
var page = {
    status: StatusLoading.LOADING
};
if (page.status === StatusLoading.LOADING) {
    console.log("Loading");
}
if (page.status === StatusLoading.READY) {
    console.log("Ready");
}
// ==========================================
// let arg: string | number;
// let arg2: "enable" | "disable";
// ==========================================
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
// ===================Lesson 3=======================
var Page;
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close"
};
// ==================Lesson 4========================
var House = /** @class */ (function () {
    function House(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    House.prototype.comeIn = function (person) {
        if (!this.door) {
            throw new Error("You can't come in.Door is close");
        }
        this.tenants.push(person);
    };
    return House;
}());
var Key = /** @class */ (function () {
    function Key() {
        this.signature = Math.random();
    }
    Key.prototype.getSignature = function () {
        return this.signature;
    };
    return Key;
}());
var Person = /** @class */ (function () {
    function Person(key) {
        this.key = key;
    }
    Person.prototype.getKey = function () {
        return this.key;
    };
    return Person;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHouse.prototype.openDoor = function (key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error("Key to another door");
        }
        return (this.door = true);
    };
    return MyHouse;
}(House));
var key = new Key();
var house = new MyHouse(key);
var person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
// ================Lesson 5==========================
// type T = string | number;
// type array1 = T[];
function getPromise() {
    return new Promise(function (resolve) {
        resolve(["Text", 50]);
    });
}
getPromise().then(function (data) {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight
    };
}
// =======================================================
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// =======================================================
var Component = /** @class */ (function () {
    function Component(props) {
        this.props = props;
    }
    return Component;
}());
var Page2 = /** @class */ (function (_super) {
    __extends(Page2, _super);
    function Page2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page2.prototype.pageInfo = function () {
        console.log(this.props.title);
    };
    return Page2;
}(Component));
