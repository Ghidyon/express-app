# express-app

A simple CRUD app for handling CRUD requests on user identities.


## Tech Stack

**Server:** Node, Express, MongoDB, Mongoose

  
## Hosted Link

[Express App](https://user-express-app.herokuapp.com/)

  
## API Reference

#### User Model
```
  {
    name: String,
    email: Sting,
    country: String
  }
```

#### Get all users

```http
  GET /users
```

#### Get a user

```http
  GET /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required!** Id of user to fetch |


#### Create a user

```http
  POST /users
```

| Parameter   | Type   | Description                                                 |
| :---------- | :----- | :---------------------------------------------------------- |
| `User Model`| `JSON` | **Required!** Create JSON of user using the User Model above|


#### Update a user

```http
  PUT /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required!** Id of user to fetch |


#### Delete a user

```http
  DELETE /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required!** Id of user to fetch |
 
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`CONNECTION_URI`

## Run Locally

Clone the project

```bash
  git clone https://github.com/ghidyon/express-app
```

Go to the project directory

```bash
  cd express-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  