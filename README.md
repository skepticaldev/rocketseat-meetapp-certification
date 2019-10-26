<h1 align="center">Rocketseat Certification - Meetapp</h1>

<h3 align="center">This repository represents the final challenge to Bootcamp 8.0 certification offered by Rocketseat (https://rocketseat.com.br/).</h3>

<p align="center">
<img alt="Repository size" src="https://img.shields.io/github/repo-size/skepticaldev/rocketseat-meetapp-certification">
<img alt="language" src="https://img.shields.io/github/languages/top/skepticaldev/rocketseat-meetapp-certification">
<img alt="language" src="https://img.shields.io/github/languages/count/skepticaldev/rocketseat-meetapp-certification">
</p>

<p align="center">
  <a href="#running-backend">Backend</a> -
  <a href="#running-frontend">Frontend</a> -
  <a href="#running-mobile">Mobile</a>
</p>

## Used features

### Frontend (ReactJS)

-   [Axios](https://github.com/axios/axios)
-   [History](https://www.npmjs.com/package/history)
-   [Immer](https://github.com/immerjs/immer)
-   [Polished](https://polished.js.org/)
-   [React Router v4](https://github.com/ReactTraining/react-router)
-   [Redux](https://redux.js.org/)
-   [Redux-Saga](https://redux-saga.js.org/)
-   [styled-components](https://www.styled-components.com/)
-   [React-Toastify](https://fkhadra.github.io/react-toastify/)
-   [React-Icons](http://react-icons.github.io/react-icons/)
-   [react-perfect-scrollbar](https://github.com/OpusCapita/react-perfect-scrollbar)
-   [Unform](https://github.com/Rocketseat/unform)
-   [Yup](https://www.npmjs.com/package/yup)
-   [date-fns](https://date-fns.org/)
-   [Reactotron](https://infinite.red/reactotron)

### Mobile (React Native)

-   [styled-components](https://www.styled-components.com/)
-   [Axios](https://github.com/axios/axios)
-   [Polished](https://polished.js.org/)
-   [react-native-snackbar](https://www.npmjs.com/package/react-native-snackbar)
-   [React-Icons](http://react-icons.github.io/react-icons/)
-   [react-perfect-scrollbar](https://github.com/OpusCapita/react-perfect-scrollbar)
-   [Unform](https://github.com/Rocketseat/unform)
-   [Yup](https://www.npmjs.com/package/yup)
-   [date-fns](https://date-fns.org/)
-   [Reactotron](https://infinite.red/reactotron)

### Backend (NodeJS)

-   [Express](https://expressjs.com/)
-   [nodemon](https://nodemon.io/)
-   [Sucrase](https://github.com/alangpierce/sucrase)
-   [Docker](https://www.docker.com/docker-community)
-   [Sequelize](http://docs.sequelizejs.com/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [node-postgres](https://www.npmjs.com/package/pg)
-   [Redis](https://redis.io/)
-   [MongoDB](https://www.mongodb.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [JWT](https://jwt.io/)
-   [Multer](https://github.com/expressjs/multer)
-   [Bcrypt](https://www.npmjs.com/package/bcrypt)
-   [Youch](https://www.npmjs.com/package/youch)
-   [Yup](https://www.npmjs.com/package/yup)
-   [Bee Queue](https://www.npmjs.com/package/bcrypt)
-   [Nodemailer](https://nodemailer.com/about/)
-   [date-fns](https://date-fns.org/)
-   [Sentry](https://sentry.io/)
-   [DotEnv](https://www.npmjs.com/package/dotenv)

## Running backend

```bash
# Clone this repo:
$ git clone https://github.com/skepticaldev/rocketseat-meetapp-certification.git

# go to backend folder
$ cd backend

# Run following command to install dependencies
$ yarn

# Create a Docker container with postgres
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Create a Docker container with Redis
$ docker run --name redismeetapp -p 6379:6379 -d -t redis:alpine

# Apply migrations
$ yarn sequelize db:migrate

# Run the server
$ yarn dev
```

To test email feature you need to change the .env config to your variables.

## Running frontend

```bash
# go to frontend folder
$ cd frontend

# Run following command to install dependeencies
$ yarn

# Run the application
$ yarn start
```

## Running mobile

This application was configured to android only. You need a physical device or a emulator to run the app.

```bash
# go to mobile folder
$ cd mobile

# Run following command to install dependeencies
$ yarn

# Change myAddress variable name acording your ip address
$ src>util>constants>address.js

# Run the metro bundler
$ yarn start

# Run the app
$ react-native run-android
```
