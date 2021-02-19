<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User; 

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        User::insert([
            ['name'=>'admin','email'=>'admin@stronghold','password'=>'admin','lang'=>'fa']
        ]);
    }
}
