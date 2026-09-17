# Integration and E2E Testing

This project was developed as part of the **Advanced Application Testing** course and focuses on **Integration Testing** and **End-to-End (E2E) Testing** using JavaScript and Node.js.

The project includes a REST API for managing books and user authentication, along with automated integration and E2E tests.

## Technologies

* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose
* Jest
* Supertest
* Docker
* Docker Compose

## Project Structure

```text id="n7q9k2"
second_part_of_course_Integration_and_E2E_testing/
├── config/
│   └── config.js
├── src/
│   └── api/
│       ├── api-routes.js
│       └── resources/
│           ├── auth/
│           │   ├── auth.controller.js
│           │   └── auth.router.js
│           └── books/
│               ├── books.controller.js
│               ├── books.model.js
│               ├── books.router.js
│               └── books.service.js
├── tests/
│   ├── e2e/
│   │   ├── e2e.js
│   │   ├── home.html
│   │   ├── mySite.html
│   │   └── tests.png
│   ├── integration/
│   │   ├── auth-api.test.js
│   │   └── books-api.unit.js
│   └── unit/
│       └── books.unit.js
├── app.js
├── docker-compose.yml
├── package.json
├── package-lock.json
└── .gitignore
```

## Testing Types

### Integration Testing

The integration tests verify the interaction between different parts of the application, including API routes, controllers, services, and the database.

The project includes integration tests for:

* User authentication
* Books API
* API responses
* Database interactions

### End-to-End Testing

The E2E tests simulate user interactions with the application and verify the system behavior from the user's perspective.

The project includes browser-based E2E testing files and test scenarios.

### Unit Testing

The project also contains unit tests for individual application components, such as the books functionality.

## API Features

The application includes functionality related to:

* User authentication
* User registration
* Books management
* REST API routes
* Database interaction

## Docker

Docker Compose is included to simplify running the application's required services.

The project contains:

```text
docker-compose.yml
```

which can be used to configure and run the required containerized services.

## Installation

Clone the repository and install the dependencies:

```bash id="t4n8z6"
git clone https://github.com/sajedosama/second_part_of_course_Integration_and_E2E_testing.git
cd second_part_of_course_Integration_and_E2E_testing
npm install
```

## Running the Tests

Run the test suite using the project's configured npm test command:

```bash id="c8s4p1"
npm test
```

Depending on the test configuration, individual test files can also be executed using Jest.

## Docker

To start the services defined in Docker Compose:

```bash id="e3m2y7"
docker compose up
```

To stop the services:

```bash id="v6k1p9"
docker compose down
```

## Purpose

The main purpose of this project is to practice:

* Integration testing
* End-to-end testing
* API testing
* Database integration testing
* Automated testing with Jest
* HTTP testing
* Docker-based test environments

## Course

**Advanced Application Testing**

This project is part of a collection of university projects developed to practice different software testing methodologies and tools.

