<?php

use Illuminate\Database\Seeder;

class FamiliesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Family::class, 10)->create()->each(function ($u) {
            $u->posts()->save(factory(App\Post::class)->make());
        });
    }
}
