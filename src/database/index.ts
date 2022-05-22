import { User } from '../models';

// Rather than using a database, I decided to use a list of hardcoded users to simulate a database.
const users: User[] = [
  {
    userid: 1201421,
    email: 'johnny.appleseed@gmail.com',
    password: 'johnny-password',
    firstName: 'Johnny',
    lastName: 'Appleseed',
    age: 21,
    dob: new Date(2001, 1, 12),
    gender: 'male',
  },
  {
    userid: 1201422,
    email: 'jane.smith@gmail.com',
    password: 'jane-password',
    firstName: 'Jane',
    lastName: 'Smith',
    age: 21,
    dob: new Date(2000, 11, 14),
    gender: 'female',
  },
];

// function to abstract database operation of finding a user from their email and password
const findUserByEmailAndPass = async (
  email: string,
  password: string
): Promise<User> => {
  for (const user of users) {
    if (email == user.email && password == user.password) {
      return user;
    }
  }
  return null;
};

// function to abstract database operation of finding a user from their userid.
const findUserByID = async (id: Number): Promise<User> => {
  for (const user of users) {
    if (id == user.userid) {
      return user;
    }
  }
  return null;
};

export { users, findUserByEmailAndPass, findUserByID };
