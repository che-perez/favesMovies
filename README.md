# FavesMovies :heart: :movie_camera: :clapper:

App to search and store my favorites movies.

## Install

- Fork and/or Clone Repository.
- `cd favesMovies`.
- Open two terminal tabs `command + T` on Mac.
- On the root folder install npm dependencies with `npm install`.
- After installing dependecies run `npm start` to run server.
- On the other tab `cd client` and run `npm install` or `yarn install`.
- Run `yarn start` or `npm start` to run **React** client.

## Database

App uses a **PostgreSQL** database.

- Install Postgres in you local machine if you don't have it.
- Create database _FavesMovies_db_.
- Run Migrations on _**db/migrations/migration-Date-Time.sql**_ in order of date and time.

## API

The **API** that the App uses is [TheMovieDB](https://www.themoviedb.org/).

- Create an account in the [website](https://www.themoviedb.org/account/signup) to get your **API Key**.
- Create a ``.env`` file in the root of the folder.
- Once created on the ``.env`` file type ``API_SECRET_KEY=YOUR_API_KEY``.
- Save and Done.
