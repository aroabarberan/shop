<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            FamiliesTableSeeder::class,
            ProductsTableSeeder::class,
            ClientsTableSeeder::class,
            OrdersTableSeeder::class,
            PhonesTagTableSeeder::class,
            PhonesTableSeeder::class,
        ]);
    }
}
