<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Family::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
    ];
});

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'price' => $faker->price,
        'image' => str_random(10),
    ];
});

$factory->define(App\Client::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'last_name' => $faker->last_name,
        'bithdate' => Carbon\Carbon::now(),
    ];
});

$factory->define(App\Order::class, function (Faker $faker) {
    return [
        'date' => Carbon\Carbon::now(),
    ];
});


$factory->define(App\Phone_tag::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
    ];
});


$factory->define(App\Phone::class, function (Faker $faker) {
    return [
        'number' => $faker->number,
    ];
});