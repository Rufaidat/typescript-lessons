let userName = "Jack";
let hasLoggedIn: boolean = true;

userName += " Herrington";

console.log(userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");

const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
}

const myPerson: {
  first: string;
  last: string;
} = {
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
