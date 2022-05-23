# express-auth-jwt-strategy

A basic express app for authorizing users with JWT strategy.

**After cloning repo and changing to directory**

1. **Install Dependencies**

   ```bash
   npm i
   ```

1. **Set env variables**

   - Create a `.env` file at the root of repo.
   - (REQUIRED): set value for SECRET
     - `SECRET=...`
   - (OPTIONAL): set value for PORT (default: 3030)
     - `PORT=...`

1. **Run development server**

   ```bash
   npm run dev
   ```

   **Or build and start**

   ```bash
   npm run build
   npm run start
   ```

1. **Login Endpoint**

   On Postman, make a `POST` request to http://localhost:3030/auth/login/

   - The request should have a body of type `x-www-form-urlencoded`
   - request body should have an `email` and `password`
     - The email and password are hard coded in this example. There are 2 existing users.
       ```js
       {
           email: 'johnny.appleseed@gmail.com',
           password: 'johnny-password'
       },
       {
           email: 'jane.smith@gmail.com',
           password: 'jane-password'
       }
       ```
   - The request should return an object with a JSON web token.

1. **Dashboard Endpoint**

   On Postman, make a `GET` request to http://localhost:3030/dashboard/user/

   - Create a header with
     - key: `Authorization`
     - value: `JWT <jwt-from-login-post-request>`
   - This should return an object representing the user information.
