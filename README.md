# NodeJS and Angular

> Testing BE NodeJS API from FE Angular standalone components

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

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

# Setup step-by-step

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