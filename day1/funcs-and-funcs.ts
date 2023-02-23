
//using callbacks
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number;

//function over loading 
export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}

const myNewMutation: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1, 20, 3], (b) => b * 10));

export type AdderFunction = (v: number) => number;

export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}


const addOne = createAdder(1);
console.log(addOne(55));
