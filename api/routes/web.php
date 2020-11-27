<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('api');
});

Route::prefix('api')->group(function () {
    Route::get('/', function () {
        return response()->json(["error" => "URI not valid"]);
    });

    Route::get('message', function () {
        return response()->json(["name" => "Laravel, Nuxt boilerplate"]);
    });
});
