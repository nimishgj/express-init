# Express init

A simple express template for setting up the environment for building the express application

# Features

- ESLint Configured: Ensures consistent code style and quality.
- Dockerfile for MongoDB Integration: Seamlessly connects MongoDB with the Express application.
- Mongo-Express: Provides a UI for visualizing the database.
- Nodemon Configured: Enables automatic server restarts during development.
# Usage

## Clone the repository 
```
git clone https://github.com/nimishgj/express-init.git
```

## Install Dependencies
```
npm i
 ```

## Start the Application
``` 
docker-compose up
 ```

The application is configured to run on port `3000` and Mongo-express UI will be accessiable from `http://localhost:8080`

Default credentials for Mongo express are
- usersname:`admin` 
- password `password`
