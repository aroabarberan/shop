<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'id', 'user', 'name', 'last_name', 'birthdate'
    ];
}
