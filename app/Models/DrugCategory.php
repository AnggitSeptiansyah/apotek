<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DrugCategory extends Model
{
    /** @use HasFactory<\Database\Factories\DrugCategoryFactory> */
    use HasFactory;
    protected $fillable = ['name'];

    public function drugs()
    {
        return $this->hasMany(Drug::class);
    }
}
