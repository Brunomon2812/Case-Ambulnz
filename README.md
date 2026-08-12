# Ambulnz Full-Stack Challenge 🍕

A pizza ordering application — REST API plus React front end — built as a technical challenge
proposed by [Ambulnz](https://github.com/AmbulnzLLC/fullstack-challenge).

## About

The API stores pizzas, their ingredients and the orders placed against them. The front end
consumes that API to build a cart, place an order and confirm it.

Prices are never trusted from the client. The order endpoint looks up each pizza's price
server-side, rejects unknown pizzas and quantities below one, and computes the total itself, so
a tampered request cannot change what an order costs.

## Features

### Back end

- Register and list pizzas
- Attach ingredients to pizzas
- Place an order for one or more pizzas
- List placed orders with their items and totals
- A second pizza endpoint (`/v2`) that flattens the ingredient join in a single query instead of
  one query per pizza

### Front end

- Browse the pizza menu with prices and ingredients
- Add pizzas to a cart and remove them again
- Review the order summary with a running total
- Confirmation popup with the order id and the amount paid

## Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/ping` | Health check |
| `GET` | `/api/pizzas` | List pizzas with their ingredients |
| `GET` | `/api/pizzas/v2` | Same list, resolved in a single query |
| `POST` | `/api/orders` | Place an order |
| `GET` | `/api/orders` | List orders with items and totals |

**Postman documentation:** https://documenter.getpostman.com/view/21554400/2s8YYCvS5u

### Example request

```http
POST /api/orders
Content-Type: application/json

{
  "pizzas": [
    { "name": "Margherita", "quantity": 2 },
    { "name": "Bufala", "quantity": 1 }
  ]
}
```

## Architecture

Both halves live in this repository:

```
case-ambulnz-backend/    TypeScript + Express REST API
case-ambulnz-frontend/   React client
```

The back end is layered, with dependencies injected through constructors so the business layer
can be tested without a database:

```
router      → wires the HTTP routes and injects dependencies
controller  → parses the request, maps errors to status codes
business    → validation and business rules
database    → Knex queries
```

Errors extend a `BaseError` that carries its own status code, so the controller maps any known
error to the right HTTP response and falls back to 500 for the rest.

## Tech stack

**Back end** — [TypeScript](https://www.typescriptlang.org/), [Node.js](https://nodejs.org/en/)
with Express, [Knex](https://knexjs.org/), [Jest](https://jestjs.io/), deployed on
[Render](https://render.com/)

**Front end** — [React](https://react.dev/), [MUI](https://mui.com/),
[Styled Components](https://styled-components.com/), [Axios](https://github.com/axios/axios)

## Running it locally

### Back end

```bash
cd case-ambulnz-backend
npm install
```

Create a `.env` file with the database connection details, then:

```bash
npm run migrations
npm run dev
```

The API listens on port 3003 by default.

### Front end

```bash
cd case-ambulnz-frontend
npm install
npm start
```

The client runs on http://localhost:3000 and expects the API on port 3003.

## Challenge brief

The original specification for this challenge: [AmbulnzLLC/fullstack-challenge](https://github.com/AmbulnzLLC/fullstack-challenge)

## Author

Bruno Monteiro — [GitHub](https://github.com/Brunomon2812) · [LinkedIn](https://www.linkedin.com/in/brunoarmonteiro/)
