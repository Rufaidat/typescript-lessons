# Tuples

### What is a tuple?

A tuple is a typed array with a pre-defined length and types for each index.

### Why use tuples?

Tuples are great because they allow each element in the array to be a known type of value, also they remove the need to declare more than one variable.

### How to define a tuple?

To define a tuple, specify the type of each element in the array e.g

&nbsp;&nbsp;&nbsp;&nbsp;`let ourTuple: [number, boolean, string]`

or

&nbsp;&nbsp;&nbsp;&nbsp;`type ThreeDCoordinates = [x:number, y:number, z:number]`

### Accessing Tuple Elements

Tuple elements can be accessed using index, the same way as an array. An index starts from zero.

# Generics

### What is Generics?

Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

### Why use generics?

- Generics with functions help make more generalized methods which more accurately represent the types used and returned.
- Generics makes it easier to write reusable code.

### Why use generics instead of any?

While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

It is more efficient to have a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned.

### Generics syntax

Generics appear in TypeScript code inside angle brackets, in the format <T>, where T represents a passed-in type. <T> can be read as a generic of type T. In this case, T will operate in the same way that parameters work in functions, as placeholders for a type that will be declared when an instance of the structure is created. The generic types specified inside angle brackets are therefore also known as generic type parameters or just type parameters. Multiple generic types can also appear in a single definition, like <T, K, A>.

Generics can appear in functions, types, classes, and interfaces.
e.g.

`function generics<T>(initial:T): ([()=>T, (v:T)=>void]){`  
&nbsp;&nbsp;&nbsp;&nbsp;`block of code`  
`}`
