# What is Keyof Operator in typescript?.

In JavaScript, we often use Object.keys to get a list of property keys. In the TypeScript world, the equivalent concept is the keyof operator. Although they are similar, keyof only works on the type level and returns a literal union type, while Object.keys returns values.
Also the keyof operator can be used to apply constraints in a generic function.

### How to use Keyof?

- A simple usage is shown below. We apply the keyof operator to the Staff type, and we get a staffKeys type in return, which represents all the property names. The result is a union of string literal types: “name” | “salary“:

```
type Staff = {
 name: string;
 salary: number;
 }

type staffKeys = keyof Staff; // "name" | "salary"
```

- The keyof operator can be used to apply constraints in a generic function.  
  The following function can retrieve the type of an object property using generics, an indexed access type, and the keyof operator:

```
function getProperty<T, K extends keyof T>(
    obj: T,
    key: K
): T[K] {
  return obj[key];
}
```

# Utility types in typescript.

TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally.

### Examples of utility types in typescript.

- #### Partial\<Type>
  Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

Example:

```
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
```

- #### Required\<Type>
  Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

Example

```
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
```

- #### Record<Keys, Type>
  Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

Example

```
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
cats.boris;

const cats: Record<CatName, CatInfo>
```

- #### Pick<Type, Keys>
  Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

Example

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;

const todo: TodoPreview
```

- #### Omit<Type, Keys>
  Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).

Example

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

todo;

const todo: TodoPreview

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo;

const todoInfo: TodoInfo
```
