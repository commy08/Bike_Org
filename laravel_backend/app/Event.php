<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    //protected $fillable = ['price'];
    protected $table = 'events';
    protected $fillable = [ 'name','detil','location','dateClose','dateDeadline','dateRace','type','user_id','rule','reward','payment','status'];


}
