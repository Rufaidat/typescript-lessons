//using callbacks: the type is specified by a function syntax after the column
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number;

//function params type
export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}

const myNewMutateFunc: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1, 20, 3], (b) => b * 10));

// closures: creating functions that take a function as a parameter and return a function
export type AdderFunction = (v: number) => number;
export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
