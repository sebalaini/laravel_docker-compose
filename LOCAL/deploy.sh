#!/usr/bin/env bash

cd /var/www/

# copy env
cp /var/www/.env.example /var/www/.env

# create key
php artisan key:generate

# clear all caches
php artisan cache:clear
php artisan config:clear
php artisan config:cache

# run migration
php artisan migrate
