<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Route::get('dashboard', function (){
//    return view('dashboard');
//})->middleware('auth');
//Route::get('register', [App\Http\Controllers\Api\ServiceController::class,'index']);

Route::get('/{any}', function () {
    return view('app');
})->where('any','.*');
