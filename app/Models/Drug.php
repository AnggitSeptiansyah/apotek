<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Drug extends Model
{
    /** @use HasFactory<\Database\Factories\DrugFactory> */
    use HasFactory;
    protected $fillable = ['name', 'price', 'expiration_date', 'drug_category_id'];

    public function drugCategory()
    {
        return $this->belongsTo(DrugCategory::class);
    }
}
