//declaring optional parameters
// optional parameters are declared with a question mark between the parameter name and the column as it is done with the param extra
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`);
}
printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "something more");

//declaring optional fields
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

// using the optional fields interface in a function the old school way.
function getEmail(user: User): string {
  if (user.info) {
    // exclamation mark can be used to tell typescript to implement a code regardless of its warning just as it is used in css to declare important styling
    return user.info.email!;
  }
  return "";
}

// using the optional fields interface in a function the easy way.

function getEmailEasy(user: User): string {
  // using the optional chaining feature
  return user?.info?.email ?? ""; //this line interprets to if user exists drill info, if info exists return email else return an empty string
}

// using optional callback
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log(x, y);
  callback?.(); //this line inteprets that if callback is present it should invoke the function
}
