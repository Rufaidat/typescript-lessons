//Function add numbers
function addNumbers(a: number, b: number): number {
  return a + b;
}
export default addNumbers;

//default values can be defined for a function params as it is done for str2 in the next line
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

//a function that returns a function 
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};
//specifying a promise
// export const fetchData = (url: string): Promise<string> =>
//   Promise.resolve(`Data from ${url}`);

//using salutation
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
