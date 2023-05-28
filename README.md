# NodeJS and Angular

> Full-Stack Angular-NodeJS. Simple using FE Angular and NodeJS as BE

## This is what we created:

### Frontend (Angular Application): 

- We created a simple Angular application that includes a login form for users to enter their email and password. This form is handled by a LoginComponent, which uses an AuthService to send HTTP requests to the server.

- The AuthService makes use of Angular's HttpClient to communicate with our server's API. We implemented both login and get user message functionality in this service, which corresponds to POST and GET requests to our server.

- The login method in the AuthService makes a POST request to the /api/login endpoint on our server, and the getUser method makes a GET request to the /api/user endpoint.

- The LoginComponent then uses these AuthService methods to handle form submission and fetch the user data. It displays a welcome message returned by the server upon a successful login.

- Additionally, we created a MessageComponent to display a simple message fetched from the /api/message endpoint of our server.

## Backend (Node.js Server): 

- We created a simple Express server in Node.js. This server has two endpoints: /api/login and /api/user. The /api/login endpoint accepts POST requests and checks the provided credentials against a mock user data. It returns a response indicating whether the login was successful.

- The /api/user endpoint accepts GET requests and returns a welcome message. In a real-world application, this endpoint could be used to fetch and return user-specific data.

- We also added a /api/message endpoint that returns a simple static message. This endpoint is used to demonstrate displaying data fetched from a server in an Angular component.

- Integration of Frontend and Backend: Our Angular application and Node.js server communicate with each other over HTTP, allowing us to demonstrate a basic form of the Model-View-Controller (MVC) architecture where the server acts as the model and controller, and the Angular application acts as the view. The Angular application sends user data to the server and receives responses, displaying the received data and messages to the user.

> Please note that this is a very basic setup for demonstration purposes. In a real-world application, you would likely need to implement more advanced features such as data persistence with a database, password hashing for security, session management or JWT for keeping users logged in, error handling, form validation, and more.

---

## Setup step-by-step

```js
// FE
npm i -g @angular/cli --routing --style=scss --unit-testing
ng version

ng new testProject --routing --style=scss
cd testProject

ng g c login --standalone
ng g s services/auth

ng serve
```

```js
// BE
mkdir loginAPi
cd loginAPi

npm init -y

npm i express cors body-parser
npm i --save-dev typescript ts-node nodemon @types/node @types/express
```

```js
touch server.ts
```

```js
// server.ts
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express app
const app = express();

// Use middlewares
app.use(cors());
app.use(bodyParser.json());

// API endpoint for user data
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Node.js!' });
  });

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));
```

```js
node server.ts
```

### Validate end-point (POST)

> Remember to maintain both BE & FE services runnning

```js
curl -X POST -H "Content-Type: application/json" -d '{"email":"test@test.com", "password":"password"}' http://localhost:3000/api/login
// {"success":true,"message":"Login successful!"}%     
```

---

## Usual Angular info here

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---
### :100: <i>Thanks!</i>
#### Now, don't be an stranger. Let's stay in touch!

##### :radio_button: linkedin: <a href="https://www.linkedin.com/in/leolanese/" target="_blank">@LeoLanese</a>
##### :radio_button: Twitter: <a href="https://twitter.com/LeoLanese" target="_blank">@LeoLanese</a>
##### :radio_button: Portfolio: <a href="https://www.leolanese.com" target="_blank">www.leolanese.com</a>
##### :radio_button: DEV.to: <a href="https://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
##### :radio_button: Blog: <a href="https://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
##### :radio_button: Questions / Suggestion / Recommendation: developer@leolanese.com