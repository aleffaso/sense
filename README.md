# Sense blog page

The main idea is build a blog and an e-commerce in the future

## Libraries 

- Bcrypt => Encrypt password;
- Body-parse => Require body params;
- Dotenv => Hide keys;
- EJS => Render HTML;
- Express => Flexible framework;
- Express-session: => Login and logout;
- Mysql2 => database dialect;
- Nodemon => reload server automatically;
- Sequelize => Connect database;

<hr>

## Configuring database

1. Add `.env` file into main folder, and put:

    - `DATABASE_PASSWORD = YourPassword`
    - `DATABASE_USER = root`
    - `DATABASE_TABLE = sense`
    - `DATABASE_HOST = localhost`
    - `DATABASE_DIALECT = mysql`

<br>

2. Go into the terminal and type `/usr/local/mysql/bin/mysql -u root -p`;

3. Put your root password

4. Create the data base `CREATE DATABASE sense`

<hr>

## Running the application

- Run: `npm install`;
- Run: `nodemon index.js`;
- On web browser: http://localhost:3000/

<hr>


## About

Start Bootstrap is an open source library of free Bootstrap themes and templates. All of the free themes and templates on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

- <https://startbootstrap.com>
- <https://twitter.com/SBootstrap>

Start Bootstrap was created by and is maintained by **[David Miller](https://davidmiller.io/)**.

- <https://davidmiller.io>
- <https://twitter.com/davidmillerhere>
- <https://github.com/davidtmiller>

Start Bootstrap is based on the [Bootstrap](https://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2021 Start Bootstrap LLC. Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE) license.
