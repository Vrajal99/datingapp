export type User = {
  id: string;
  displayName: string;
  email: string;
  token: string;
  imageUrl?: string;
};

export type LoginCreds = {
  email: string;
  password: string;
};

export type RegisterCreds = {
  email: string;
  displayName: string;
  password: string;
};

//Same functionlity can be achieved using an interface instead of a type alias. The choice between the two often comes down to personal preference and specific use cases. In this case, since we are defining a simple structure for a user object, using a type alias is perfectly fine and concise. However, if we wanted to define a more complex structure with methods or extend other types, using an interface might be more appropriate. and to stay compatible with C# (interface has to be IUser, typescript no I).

// export interface IUser {
//   id: string;
//   displayName: string;
//   email: string;
//   token: string;
//   imageUrl?: string;
// }
