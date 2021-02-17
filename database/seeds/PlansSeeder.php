<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Plans; 

class PlansSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Plans::truncate();

        Plans::create(['type'=>'daily','profit'=>.5,'invest' => .001]);
    }
}
