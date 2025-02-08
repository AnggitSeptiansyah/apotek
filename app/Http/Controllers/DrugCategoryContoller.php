<?php

namespace App\Http\Controllers;

use App\Http\Resources\DrugCategoryResource;
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
