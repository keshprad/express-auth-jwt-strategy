interface User {
  userid: Number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
  dob: Date;
  gender: 'male' | 'female' | 'other';
}

export { User };
