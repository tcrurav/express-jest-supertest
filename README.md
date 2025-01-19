# JEST and SuperTest for testing an express API

This project is just a project example to show how to test an API using JEST and SuperTest.

## Getting Started

Download links:

From Github: https://github.com/tcrurav/express-jest-supertest.git

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com) - You can install it from https://www.mysql.com/downloads/.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/tcrurav/express-jest-supertest.git
```

You need a node.js working environment. The LTS is recommended: https://nodejs.org/es/

Once you have cloned the project install all dependencies.

```
cd express-jest-supertest/backend
npm install
```

You need a backend/.env file. You can use the backend/.env.example file:

```
cd express-jest-supertest/backend
cp .env.example .env
```

Run the project:

```
cd express-jest-supertest/backend
npm start
```

You can use the POSTMAN link to create a user with the API: https://documenter.getpostman.com/view/3446841/2sAYQanrW4

Enjoy!!!


## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
* [jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [supertest](https://github.com/ladjs/supertest) - provides a high-level abstraction for testing HTTP.

## Acknowledgments

* https://dev.to/lukekyl/testing-your-express-js-backend-server-3ae6. Testing your Express.js Backend Server.
* https://levelup.gitconnected.com/building-an-express-api-with-sequelize-cli-and-unit-testing-882c6875ed59. Building an Express API with Sequelize CLI and Unit Testing!
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
* https://www.theserverside.com/video/Follow-these-git-commit-message-guidelines. Guidelines to write properly git commit messages.