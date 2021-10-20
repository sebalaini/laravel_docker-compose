#!/usr/bin/env bash

# copy env
cp .env.example .env

# create key
api php artisan key:generate

# clear all caches
php artisan cache:clear
php artisan config:clear
php artisan config:cache

# run migration
php artisan migrate
