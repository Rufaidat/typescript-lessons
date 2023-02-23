let userName = "Jack";
let hasLoggedIn: boolean = true; //boolean type declaration

userName += " Herrington";

console.log(userName);

let myNumber: number = 10; //number type declaration

let myRegex: RegExp = /foo/; //regexp type declaration

const names: string[] = userName.split(" "); //array of strings type declaration  

const myValues: Array<number> = [1, 2, 3]; //array of numbers type declaration

//implementing Person interface
interface Person {
  first: string;
  last: string;
}

// use the person interface in a function 
const myPerson: Person= {
  first: "Jack",
  last: "Herrington",
};

const ids: Record<number, string> = {
  //Record is used to define key and value data type
  10: "a",
  20: "b",
};
ids[30] = "c";

if (ids[30] === "D") {
}

[1, 2, 3].forEach((v) => console.log(v));
const out: number[] = [4, 5, 6].map((v) => v * 10);
