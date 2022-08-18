## Laravel, Nuxt docker
Boilerplate template for Laravel API and Nuxt front-end with docker-compose

## Table of content
- [Stack](#stack)
- [install](#install)
- [env](#env)
- [Setup](#start)
- [Database](#Creating-a-User-for-MySQL)
- [Migration](#Migrating-Data-and-Working-with-the-Tinker-Console)
- [phpMyAdmin](#phpMyAdmin)
- [3rd party tools connection](#External-connection-with-3rd-party-software)
- [PHP CS Fixer](#PHP-CS-Fixer)
- [TODO](#todo)

## stack
- Nginx
- PHP 8
- MySQL 5.7
- phpMyAdmin
- Node
- Laravel 9
- Nuxt 2

## Install

To install the application run the script `npm run deploy`, this script will install Nuxt with relative dependencies and Laravel with relative dependencies

## Env

As a final step, before to start with the project, we will make a copy of the `.env.example` file in the client folder and name it `.env`.

The `.env` of Laravel need to reflect the same info from your `docker-compose.yml`:  and update it to reflect the specifics of your setup. You will modify the following fields:

```
DB_HOST The database name container.
DB_DATABASE The laravel database.
DB_USERNAME The username for your database. In this case, we will use laraveluser.
DB_PASSWORD The secure password for this user account. In this case, we will use root.

api/.env

DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laraveluser
DB_PASSWORD=root
```

## start

With all of your services defined in your docker-compose file, you just need to issue a single command to start all of the containers, create the volumes, and set up and connect the networks:


`$ docker-compose up`

After that command run the command `npm run install:laravel` to install Laravel and generate the Key.

You now have the environment settings required to run your application. To cache these settings into a file, which will boost your application’s load speed, run:

`$ docker-compose exec api php artisan config:cache`

Your configuration settings will be loaded into `/var/www/bootstrap/cache/config.php` on the container.

As a final step, visit `http://127.0.0.1`  or `localhost` in the browser. You will see the home page for your application.

With your containers running and your configuration information in place, you can move on to configuring your user information for the `laravel` database on the db container.

##  Creating a User for MySQL

The default MySQL installation only creates the root administrative account, which has unlimited privileges on the database server. In general, it’s better to avoid using the root administrative account when interacting with the database. Instead, let’s create a dedicated database user for our application’s `Laravel` database.

This step it's done with the `npm run install:db` script that run in the `npm run install` script

## Migrating Data and Working with the Tinker Console

With your application running, you can migrate your data and experiment with the `tinker` command, which will initiate a *PsySH* console with Laravel preloaded. PsySH is a runtime developer console and interactive debugger for PHP, and Tinker is a REPL specifically for Laravel. Using the `tinker` command will allow you to interact with your Laravel application from the command line in an interactive shell.

First, test the connection to MySQL by running the Laravel `artisan migrate` command, which creates a migrations table in the database from inside the container:

`$ docker-compose exec api php artisan migrate`

This command will migrate the default Laravel tables. The output confirming the migration will look like this:

```
Output

Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table
Migrating: 2014_10_12_100000_create_password_resets_table
Migrated:  2014_10_12_100000_create_password_resets_table
```

Once the migration is complete, you can run a query to check if you are properly connected to the database using the `tinker` command:

`$ docker-compose exec api php artisan tinker`

## phpMyAdmin

This setup provides a phpMyAdmin interface available at `127.0.0.1:3306` using the same credentials from the `.env` file

## External connection with 3rd party software

If you prefer to connect to the database using software like sequel PRO you can connect by using `127.0.0.1` as a host.

## PHP CS Fixer

To run the PHP CS Fixer run the following command: `npm run lint`

# TODO #

- update doc
