<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
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
Route::post('forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('reset-password', [AuthController::class, 'resetPassword']);

//public routes
Route::prefix('public')->group(function (){

//services
    Route::prefix('services')->group(function (){
        Route::get('/', [\App\Http\Controllers\Api\public\ServiceController::class,'index']);
        Route::get('latest_services',[\App\Http\Controllers\Api\public\ServiceController::class,'latest']);
        Route::get('show/{service}',[\App\Http\Controllers\Api\public\ServiceController::class,'show']);
    });

//products
    Route::prefix('products')->group(function (){
        Route::get('/', [\App\Http\Controllers\Api\public\ProductController::class,'index']);
        Route::get('latest_products',[\App\Http\Controllers\Api\public\ProductController::class,'latest']);
        Route::get('show/{product}',[\App\Http\Controllers\Api\public\ProductController::class,'show']);
    });

//customers
    Route::prefix('customers')->group(function (){
        Route::get('/', [\App\Http\Controllers\Api\public\CustomerController::class,'index']);
        Route::get('latest_customers',[\App\Http\Controllers\Api\public\CustomerController::class,'latest']);
        Route::get('show/{customer}',[\App\Http\Controllers\Api\public\CustomerController::class,'show']);
    });

//customers
    Route::prefix('news')->group(function (){
        Route::get('/', [\App\Http\Controllers\Api\public\NewsController::class,'index']);
        Route::get('latest_news',[\App\Http\Controllers\Api\public\NewsController::class,'latest']);
        Route::get('show/{news}',[\App\Http\Controllers\Api\public\NewsController::class,'show']);
    });

//competencies
    Route::prefix('competencies')->group(function (){
        Route::get('/', [\App\Http\Controllers\Api\public\CompetencyController::class,'index']);
        Route::get('latest_competencies',[\App\Http\Controllers\Api\public\CompetencyController::class,'latest']);
        Route::get('show/{competency}',[\App\Http\Controllers\Api\public\CompetencyController::class,'show']);
    });

//partners
    Route::prefix('partners')->group(function (){
        Route::get('/', [\App\Http\Controllers\Api\public\PartnerController::class,'index']);
    });

//privacy_policy
    Route::prefix('privacy_policy')->group(function (){
        Route::get('/', [\App\Http\Controllers\Api\public\PrivacyPolicyController::class,'index']);
    });

//terms_of_use
    Route::prefix('terms_of_use')->group(function (){
        Route::get('/', [\App\Http\Controllers\Api\public\TermsOfUseController::class,'index']);
    });

//about
    Route::prefix('about')->group(function (){
        Route::get('/', [\App\Http\Controllers\Api\public\AboutController::class,'index']);
//        Route::get('latest-about',[\App\Http\Controllers\Api\public\AboutController::class,'latest']);
        Route::get('show/{about}',[\App\Http\Controllers\Api\public\AboutController::class,'show']);
    });

//carousel
    Route::prefix('carousel_galley')->group(function (){
        Route::get('/', [\App\Http\Controllers\Api\public\CarouselController::class,'index']);
        Route::get('preview/{id}',[\App\Http\Controllers\Api\public\CarouselController::class,'preview']);
    });

//contact-us
    Route::prefix('contact_us')->group(function (){
        Route::post('/request', [\App\Http\Controllers\Api\public\ContactUsController::class,'store']);
    });

//company information
    Route::prefix('company')->group(function (){
        Route::get('/info', [\App\Http\Controllers\Api\public\ContactUsController::class,'fetch']);
    });

});

Route::post('/upload-image',[\App\Http\Controllers\UploadController::class, 'index']);


