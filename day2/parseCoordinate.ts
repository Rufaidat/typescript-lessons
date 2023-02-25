// defining coordinate object
interface Coordinate {
  x: number;
  y: number;
}
// function that create the coordinate from object
function parseCoordinate(str: string): Coordinate;
// function that create the coordinate from number

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  // Conditional Types
  // using conditionals to define the overloaded function from different input parameter type

  // If the argument is of string type
  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  }
  //if the argument is of object type
  else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  }
  //if the argument is of number type
  else {
    coord = {
      x: arg1 as unknown as number,
      y: arg2 as number,
    };
  }

  return coord;
}
// testing the overloaded function with different parameter
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 }));
console.log(parseCoordinate("x:12,y:22"));
