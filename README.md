# Plates

A space for friends to recreate and share menus from their favorite meals

### Background

This app was created in September 2022 by [Jeff](https://github.com/jefftmarks) and [Lari](https://github.com/larimar1212) as part of a project to practice full-stack web development.

The frontend is built on Javascript and React. The backend is build on Ruby with with a Sinatra backend API.

### Database Associations

![Database Associations](/associations.png)

### Running the App

To run the app in development mode, navigate into the /phase-3-backend directory.

Run `bundle install` tp install the necessary gem dependencies.

Run `bundle exec rake db:migrate db:seed` to build the database.

Run `bundle exec rake server` to launch the backend server at [http://localhost:3000](http://localhost:3000).

In a separate terminal, navigate into the /phase-3-frontend directory.

Run `npm install` to install the necessary dependencies.

Run `npm start` to run the app on [http://localhost:3000/](http://localhost:3000).