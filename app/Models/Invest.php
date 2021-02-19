<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Invest extends Model 
{
    public $timestamps = false;
    protected $table = 'invest';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id','plan_id','coin','amount'
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
