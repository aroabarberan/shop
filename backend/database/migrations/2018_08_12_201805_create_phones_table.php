<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phones', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('client');
            $table->unsignedInteger('tag');
            $table->string('number');

        });

        Schema::table('phones', function ($table) {
            $table->foreign('client')->references('id')->on('clients');
            $table->foreign('tag')->references('id')->on('phone_tags');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phones');
    }
}
