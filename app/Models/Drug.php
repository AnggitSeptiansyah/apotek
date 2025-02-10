<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Drug extends Model
{
    /** @use HasFactory<\Database\Factories\DrugFactory> */
    use HasFactory;
    protected $fillable = ['name', 'price', 'expiration_date', 'drug_category_id'];

    public function drugCategory(): BelongsTo
    {
        return $this->belongsTo(DrugCategory::class);
    }

    public function stock(): HasOne
    {
        return $this->hasOne(Stock::class);
    }
}
