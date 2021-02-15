<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTempUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temp_users', function (Blueprint $table) {
            $table->bigIncrements('id');
             $table->string('name',25);
            $table->string('email',100);
            $table->string('password',100);
            $table->integer('ref_id')->default(0);
            $table->string('code', 6);
            $table->tinyInteger('try');
            $table->boolean('verified')->default(false);
            $table->timestamp('time');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('temp_users');
    }
}
