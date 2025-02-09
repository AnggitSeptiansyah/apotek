<?php

namespace App\Http\Controllers;

use App\Http\Requests\DrugCategory\StoreRequest;
use App\Http\Requests\DrugCategory\UpdateRequest;
use App\Http\Resources\DrugCategoryResource;
use App\Models\DrugCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DrugCategoryContoller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $drugCategories = DB::table("drug_categories")->select('id', 'name')->get();
        return inertia("DrugCategory/Index", [
            'drugCategories' => DrugCategoryResource::collection($drugCategories),
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("DrugCategory/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        DrugCategory::create($request->validated());
        return to_route('drugcategories.index')->with('success', "Data kategori obat \"$request->name\" berhasil ditambahkan");
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
    public function edit($id)
    {
        $drugCategory = DrugCategory::find($id);
        return inertia("DrugCategory/Edit", [
            'drugCategory' => new DrugCategoryResource($drugCategory),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, $id)
    {
        $drugCategory = DrugCategory::find($id);
        $drugCategory->update($request->validated());
        return to_route('drugcategories.index')->with('success', "Data kategori obat \"$request->name\" berhasil diubah!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DrugCategory $drugCategory)
    {
        // Data bertipe constraint sehingga tidak bisa dihapus
        // $drugCategory->delete();
        // return to_route('drugcategories.index')->with('success', "Data kategori obat \"$drugCategory->name\" berhasil dihapus");
    }
}
