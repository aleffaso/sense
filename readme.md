# Sense - Picture frames 

<p>
    <img src="public/images/bg.png">
</p>

## Overview
The main purpose of this project is to create a webpage to a customer about picture frames.

<hr>

## Libraries 

- Bcrypt => Crypt password;
- Body-parser => Bypass json data;
- DotEnv => Work with envkeys;
- EJS => Render HTML;
- Express => Flexible framework;
- Express-session => create specific routes for admins controller;
- JWT => Security Access 
- Nodemon => Update server when save;
- Sequelize => Manipulate database;
- Slugify => Replaces spaces with hyphen from saved text;
- TinyMCE => Manage blog hyper text

<hr>

## Set up `.env` file

- `POSTGRES_DIALECT` = postgres
- `POSTGRES_NAME` = sense
- `NEW_POSTGRES_NAME` = sense
- `POSTGRES_PASSWORD` = sense
- `POSTGRES_USER` = root
- `POSTGRES_DB` = sense
- `POSTGRES_TIMEZONE` = -03:00

- `PORT` = 3000
- `SESSION_SECRET` = passwordSecret

- `JWT_TOKEN` = jwttoken

<hr>

## Running the application

To run the app you'll need [Docker](https://www.docker.com/products/docker-desktop/). After that, follow the steps below in your `terminal`:

- Run: `git` `clone` https://github.com/aleffaso/sense.git

- Run: `docker-compose up --build`

- Link: You can access the web page on `http://localhost:3000/`

- The application is also running at this [link](https://sense.herokuapp.com/) on Heroku

<hr>


## Licenses
<br>
<p>
    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
</p>
