# snackalog_back_end

[Trello Board](https://trello.com/b/QnFdarGf/group-project-snackalog)

## Getting Started 

This backend uses a PostgreSQL local database so you will need to download [postgreSQL](https://www.postgresql.org/) or change the db connection to link to a cloud based database.

Once you have postgreSQL you are ready to start.

Clone this repo onto your local machine and navigate into the folder.

Run `npm install` or `npm i` in the terminal while in the root of the folder you just cloned

Run the following commands `npm run dbinit` and then `npm run dbseed`

The first command, `npm run dbinit` will initialize your database 

The second command, `npm run dbseed` will populate or seed your database with some data

Create a .env file, in the terminal you can run `touch .env` 

In the .env file write the following;
```
PORT=8000
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=snacks_dev
PG_USER=postgres
```
You can now run `npm start`

Your backend should now be up and running [here](http://localhost:8000),
visit [here](http://localhost:8000/snacks) and ensure you are getting the snacks data

If everything is working you can now checkout how to get the [frontend](https://github.com/SuperNinjaEv/snackalog_front_end) up and running or feel free to build your own 

