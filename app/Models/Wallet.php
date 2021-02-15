<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model 
{
    public $timestamps = false;
    protected $table = 'wallet';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id','coin','address','added_on'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

     public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
    }
}
