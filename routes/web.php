<?php

use App\Http\Controllers\DrugController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\SupplierController;
use App\Models\DrugCategory;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('Welcome');
});

Route::get('/dashboard', function () {
    return Inertia('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/suppliers', SupplierController::class);
    Route::resource('/drugcategories', DrugCategory::class);
    Route::resource('/drugs', DrugController::class);
    Route::resource('/purchases', PurchaseController::class);
    Route::resource('/sales', SaleController::class);
});

require __DIR__.'/auth.php';
