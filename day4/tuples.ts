// defining tuples
type ThreeDCoordinates = [x: number, y: number, z: number];
// using threedCoordinate tuple in a function
function add3DCoordinate(
  c1: ThreeDCoordinates,
  c2: ThreeDCoordinates
): ThreeDCoordinates {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}
console.log(add3DCoordinate([0, 0, 0], [10, 20, 30]));

// Tuples with different types

// implementing a tuple that works simiar to react Usestate
// usetate returns a use state and a use state setter

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

// the function simple string state can now be used as you would react useState
const [str1getter, str1setter] = simpleStringState("hello");
const [myName, myNameSetter] = simpleStringState("Rufaidat");
console.log(str1getter());
console.log(myName());
str1setter("goodbye");
myNameSetter("Rufaidat Al-siddiq");

console.log(str1getter());
console.log(myName());
