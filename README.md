## Laravel, Nuxt docker
Boilerplate template for Laravel API and Nuxt front-end with docker-compose

## Table of content
- [Stack](#stack)
- [env](#env)
- [Setup](#start)
- [Database](#Creating-a-User-for-MySQL)
- [Migration](#Migrating-Data-and-Working-with-the-Tinker-Console)
- [phpMyAdmin](#phpMyAdmin)
- [3rd party tools connection](#External-connection-with-3rd-party-software)
- [TODO](#todo)

## stack
- Nginx
- PHP 7.3
- MySQL 5.7
- phpMyAdmin
- Node

## Env

As a final step, before to start with the project, we will make a copy of the `.env.example` file that Laravel and Nuxt includes and name them `.env`, which is the file Laravel expects to define its environment and Nuxt to use custom env variables.

The `.env` of Laravel need to reflect the same info from your `docker-compose.yml`:  and update it to reflect the specifics of your setup. You will modify the following fields:

```
DB_HOST will be your database name container.
DB_DATABASE will be the laravel database.
DB_USERNAME will be the username you will use for your database. In this case, we will use laraveluser.
DB_PASSWORD will be the secure password you would like to use for this user account. In this case, we will use root.

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

When you run docker-compose up for the first time, it will download all of the necessary Docker images, which might take a while. Once the images are downloaded and stored in your local machine, Compose will create your containers. You can run the process with the `-d` flag that daemonizes the process, running your containers in the background but you will not be able to see the Nuxt errors/messages if you do so.

Once the process is complete, you can use the `$ docker ps` to list all of the running containers:

```
Output
CONTAINER ID        NAMES               IMAGE                             STATUS              PORTS
c31b7b3251e0        db                  mysql:5.7.22                      Up 2 seconds        0.0.0.0:3306->3306/tcp
5ce4ee31d7c0        webserver           nginx:alpine                      Up 2 seconds        0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp
...
```

We’ll now use `docker-compose exec` to set the application key for the Laravel application. The `docker-compose exec` command allows you to run specific commands in containers.

The following command will generate a key and copy it to your .env file, ensuring that your user sessions and encrypted data remain secure:

`$ docker-compose exec api php artisan key:generate`

You now have the environment settings required to run your application. To cache these settings into a file, which will boost your application’s load speed, run:

`$ docker-compose exec app php artisan config:cache`

Your configuration settings will be loaded into `/var/www/bootstrap/cache/config.php` on the container.

As a final step, visit `http://127.0.0.1`  or `localhost` in the browser. You will see the home page for your application.

With your containers running and your configuration information in place, you can move on to configuring your user information for the `laravel` database on the db container.

##  Creating a User for MySQL

The default MySQL installation only creates the root administrative account, which has unlimited privileges on the database server. In general, it’s better to avoid using the root administrative account when interacting with the database. Instead, let’s create a dedicated database user for our application’s `Laravel` database.

To create a new user, execute an interactive bash shell on the db container:

`$ docker-compose exec db bash`

Inside the container, log into the MySQL root administrative account:

`root@...#/ mysql -u root -p`

You will be prompted for the password you set for the MySQL root account during installation in your docker-compose file.

Start by checking for the database called `laravel`, which you defined in your docker-compose file. Run the show databases command to check for existing databases:

`mysql > show databases;`

Next, create the user account that will be allowed to access this database. Our username will be `laraveluser`, though you can replace this with another name if you’d prefer. Just be sure that your username and password here match the details you set in your `.env` file in the previous step:

`mysql > GRANT ALL ON laravel.* TO 'laraveluser'@'%' IDENTIFIED BY 'your_laravel_db_password';`

Flush the privileges to notify the MySQL server of the changes:

`mysql > FLUSH PRIVILEGES;`

Exit MySQL:

`mysql > EXIT;`

Finally, exit the container:

`root@...#/ exit`

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

# TODO #

- BDD (behat)
- Redis?
