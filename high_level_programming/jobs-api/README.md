# Jobs API

## Overview
The **Jobs API** is a basic API that allows users to manage job listings. It includes authentication and authorization
features, ensuring that only authenticated users can perform CRUD (Create, Read, Update, Delete) operations on jobs they created. 
This project is built for learning purposes to demonstrate how to implement user authentication and authorization in a **RESTful API**.


## Features

- **User Authentication**: Users can register and log in to the system.
- **User Authorization**: Each user can only interact with the jobs they have created, User can create, read, update,
or delete only their own jobs.
- **JWT Token**: A JWT (JSON Web Token) is generated upon login and must be provided in the header for any subsequent requests to protected routes.

## API Endpoints

### **Auth Routes**
- **POST** `domain/api/vi/auth/signup` - Register a new user
  - Body
  ```json
     {
        "name": "exampleuser",
        "email": "exampleemail",
        "password": "password123"
     }
    ```

- **POST** `domain/api/v1/auth/login` - Log in an existing user and receive a JWT token.
  - Body
  ```json
     {
        "email": "exampleemail",
        "password": "password123"
     }
    ```

  - Response
    ```json
     {
        "token": "user_jwt_token"
     }
    ```

    
### **Job Routes (Protected)**

- **POST** `domain/api/v1/jobs` - Create a new job (authentication required)
  - Headers:
    - `Authorization: Bearer <JWT_Token>`
  
 - Body
 ```json
     {
        "company": "example company",
        "position": "system administrator"
     }
   ```

- **GET** `domain/api/v1/jobs` - Retrieve all jobs created by the authenticated user
  - Headers:
    - `Authorization: Bearer <JWT_Token>`
 
 
- **GET** `domain/api/v1/jobs/:id` - Retrieve a specific job by its ID (created by the authenticated user)
 - Headers:
    - `Authorization: Bearer <JWT_Token>`

- **PATCH** `domain/api/v1/jobs/:id` - Update a job created by the authenticated user.
 - Headers:
    - `Authorization: Bearer <JWT_Token>`

 - Body
 ```json
        {
        "company": "updated example company",
        "position": "updated system administrator"
     }
   ```

- **DELETE** `domain/api/v1/jobs/:id` - Delete a job created by the authenticated user.
 - Headers:
    - `Authorization: Bearer <JWT_Token>`


## Setup and Installation

- Clone the repository

```bash
      git clone <repo-url>
      cd <repo-name>
```

- Install dependencies 

```bash 
      npm install 
```

- Configure environment variables 
Create a `.env` file in the root of the project and add the following configs.

```bash
    MONGO_URI=<db-uri>
    PORT=5000
    JWT_SECRET=<your-256-bit-secret key>
    JWT_EXPIRES_IN=<jwt-expires-in>
```

- Start the development server:

```bash
    npm run dev
```


