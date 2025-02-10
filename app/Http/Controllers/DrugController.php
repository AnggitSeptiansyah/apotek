<?php

namespace App\Http\Controllers;

use App\Http\Resources\DrugCategoryResource;
use App\Http\Resources\DrugResource;
use App\Models\Drug;
use App\Models\DrugCategory;
use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DrugController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $drugs = Drug::with('drugCategory', 'stock')->latest()->paginate(10);
        return inertia('Drug/Index', [
            'drugs' => DrugResource::collection($drugs),
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $drugCategories = DB::table('drug_categories')->select('id', 'name')->get();
        return inertia("Drug/Create", [
            'drugCategories' => DrugCategoryResource::collection($drugCategories),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'expiration_date' => 'required|date',
            'price' => 'required|numeric',
            'drug_category_id' => 'required',
            'quantity' => 'required|integer|min:0',
        ]);

        DB::transaction(function() use ($request) {
            $drug = Drug::create([
                'name' => $request->name,
                'expiration_date' => $request->expiration_date,
                'price' => $request->price,
                'drug_category_id' => $request->drug_category_id,
            ]);

            Stock::create([
                'drug_id' => $drug->id,
                'quantity' => $request->quantity
            ]);
        });

        return to_route('drugs.index')->with('success', 'Data obat berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
