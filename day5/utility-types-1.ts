interface MyUser {
  name: string;
  id: number;
  email?: string;
  phone?: string;
}
//using partial utility type
type MyUserOptionals = Partial<MyUser>; //this line of code does exactly what the commented block of code below does

/*interface MyUserOptionals{
    name?:string;
    id?:string;
    email?:string;
  }*/
const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Jack",
      id: 1,
      email: "email@email.com",
    },
    {
      email: "sendemail@email.com",
    }
  )
);

//using required utility type

type RequiredMyUser = Required<MyUser>; //just as the name suggests, it convert all the fields of a type to required parameters

//using pick utility type
type JustEmailAndName = Pick<MyUser, "email" | "name">;

//using record and omit utility type
type UserWithoutID = Omit<MyUser, "id">;
const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 2,
      name: "Mr. Foo",
    },
    {
      id: 3,
      name: "Mrs. Baz",
    },
  ])
);
