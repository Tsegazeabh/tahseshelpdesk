<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
require __DIR__ . '/cms.php';

Route::post('login', [AuthController::class, 'login']);

//services
Route::prefix('services')->group(function (){
    Route::get('/', [\App\Http\Controllers\Api\cms\ServiceController::class,'index']);
    Route::get('latest-services',[\App\Http\Controllers\Api\cms\ServiceController::class,'latest']);
    Route::get('/{id}',[\App\Http\Controllers\Api\cms\ServiceController::class,'detail']);
});

//products
Route::prefix('products')->group(function (){
    Route::get('/', [\App\Http\Controllers\Api\cms\ProductController::class,'index']);
    Route::get('latest-products',[\App\Http\Controllers\Api\cms\ProductController::class,'latest']);
    Route::get('/{id}',[\App\Http\Controllers\Api\cms\ProductController::class,'detail']);
});

//customers
Route::prefix('customers')->group(function (){
    Route::get('/', [\App\Http\Controllers\Api\cms\CustomerController::class,'index']);
    Route::get('latest-customers',[\App\Http\Controllers\Api\cms\CustomerController::class,'latest']);
    Route::get('/{id}',[\App\Http\Controllers\Api\cms\CustomerController::class,'detail']);
});

//competencies
Route::prefix('competencies')->group(function (){
    Route::get('/', [\App\Http\Controllers\Api\cms\CompetencyController::class,'index']);
    Route::get('latest-competencies',[\App\Http\Controllers\Api\cms\CompetencyController::class,'latest']);
    Route::get('/{id}',[\App\Http\Controllers\Api\cms\CompetencyController::class,'detail']);
});

//privacy_policy
Route::prefix('privacy-policy')->group(function (){
    Route::get('/', [\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'index']);
});

//terms_of_use
Route::prefix('terms-of-use')->group(function (){
    Route::get('/', [\App\Http\Controllers\Api\cms\TermsOfUseController::class,'index']);
});

//about
Route::prefix('about')->group(function (){
    Route::get('/', [\App\Http\Controllers\Api\cms\AboutController::class,'index']);
});

//contact-us
Route::prefix('contact-us')->group(function (){
    Route::post('/request', [\App\Http\Controllers\Api\cms\ContactUsController::class,'store']);
});

Route::post('/upload-image',[\App\Http\Controllers\UploadController::class, 'index']);


