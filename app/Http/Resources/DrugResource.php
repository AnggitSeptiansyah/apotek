<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DrugResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name, 
            'price' => $this->price, 
            'expiration_date' => $this->expiration_date, 
            'drug_category_id' => $this->drug_category_id,
        ];
    }
}
