<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            // $table->text('name');
            // $table->text('detail');
            // $table->text('location');
            // $table->text('rule');
            // $table->text('reward');
            // $table->text('payment');
            // $table->date('dateClose');
            // $table->date('dateDeadline');
            // $table->date('dateRace');
            // $table->string('type',1);
            // $table->integer('user_id',11);
            // $table->string('status',1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
