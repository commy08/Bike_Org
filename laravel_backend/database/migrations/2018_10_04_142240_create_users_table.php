<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->text('line_id');
            $table->text('line_pic');
            $table->text('line_token');
            $table->string('type',1);
            $table->string('firstname',100);
            $table->string('lastname',100);
            $table->string('sex');
            $table->text('address');
            $table->date('birthday');
            $table->text('picID');
            $table->text('picORG');
            $table->text('OrgName');
            $table->text('tradeNum');
            $table->string('tel',10);
            $table->string('status',1);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
