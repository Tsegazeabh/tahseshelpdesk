<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth:sanctum'])->prefix('cms')->group(function (){
    Route::get('dashboard', [\App\Http\Controllers\Api\AuthController::class,'index']);
    Route::get('logout/{id}', [AuthController::class, 'logout']);

    //services
    Route::prefix('services')->group(function (){
        Route::get('index', [\App\Http\Controllers\Api\cms\ServiceController::class,'index']);
        Route::post('create',[\App\Http\Controllers\Api\cms\ServiceController::class,'store']);
        Route::get('show/{service}',[\App\Http\Controllers\Api\cms\ServiceController::class,'show']);
        Route::put('update/{service}',[\App\Http\Controllers\Api\cms\ServiceController::class,'update']);
        Route::get('delete/{id}',[\App\Http\Controllers\Api\cms\ServiceController::class,'destroy']);
        Route::get('restore/{id}',[\App\Http\Controllers\Api\cms\ServiceController::class,'restore']);
        Route::get('preview/{id}',[\App\Http\Controllers\Api\cms\ServiceController::class,'preview']);
    });
//products
    Route::prefix('products')->group(function (){
        Route::get('index', [\App\Http\Controllers\Api\cms\ProductController::class,'index']);
        Route::post('create',[\App\Http\Controllers\Api\cms\ProductController::class,'store']);
        Route::get('show/{product}',[\App\Http\Controllers\Api\cms\ProductController::class,'show']);
        Route::put('update/{product}',[\App\Http\Controllers\Api\cms\ProductController::class,'update']);
        Route::get('delete/{id}',[\App\Http\Controllers\Api\cms\ProductController::class,'destroy']);
        Route::get('restore/{id}',[\App\Http\Controllers\Api\cms\ProductController::class,'restore']);
        Route::get('preview/{id}',[\App\Http\Controllers\Api\cms\ProductController::class,'preview']);
    });
//customers
    Route::prefix('customers')->group(function (){
        Route::get('index', [\App\Http\Controllers\Api\cms\CustomerController::class,'index']);
        Route::post('create',[\App\Http\Controllers\Api\cms\CustomerController::class,'store']);
        Route::get('show/{customer}',[\App\Http\Controllers\Api\cms\CustomerController::class,'show']);
        Route::put('update/{customer}',[\App\Http\Controllers\Api\cms\CustomerController::class,'update']);
        Route::get('delete/{id}',[\App\Http\Controllers\Api\cms\CustomerController::class,'destroy']);
        Route::get('restore/{id}',[\App\Http\Controllers\Api\cms\CustomerController::class,'restore']);
        Route::get('preview/{id}',[\App\Http\Controllers\Api\cms\CustomerController::class,'preview']);
    });
//competencies
    Route::prefix('competencies')->group(function (){
        Route::get('index', [\App\Http\Controllers\Api\cms\CompetencyController::class,'index']);
        Route::post('create',[\App\Http\Controllers\Api\cms\CompetencyController::class,'store']);
        Route::get('show/{competency}',[\App\Http\Controllers\Api\cms\CompetencyController::class,'show']);
        Route::put('update/{competency}',[\App\Http\Controllers\Api\cms\CompetencyController::class,'update']);
        Route::get('delete/{id}',[\App\Http\Controllers\Api\cms\CompetencyController::class,'destroy']);
        Route::get('restore/{id}',[\App\Http\Controllers\Api\cms\CompetencyController::class,'restore']);
        Route::get('preview/{id}',[\App\Http\Controllers\Api\cms\CompetencyController::class,'preview']);
    });
//privacy_policy
    Route::prefix('privacy_policy')->group(function (){
        Route::get('index', [\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'index']);
        Route::post('create',[\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'store']);
        Route::get('show/{privacy_policy}',[\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'show']);
        Route::put('update/{privacy_policy}',[\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'update']);
        Route::get('delete/{id}',[\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'destroy']);
        Route::get('restore/{id}',[\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'restore']);
        Route::get('preview/{id}',[\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'preview']);
    });
//terms_of_use
    Route::prefix('terms_of_use')->group(function (){
        Route::get('index', [\App\Http\Controllers\Api\cms\TermsOfUseController::class,'index']);
        Route::post('create',[\App\Http\Controllers\Api\cms\TermsOfUseController::class,'store']);
        Route::get('show/{terms_of_use}',[\App\Http\Controllers\Api\cms\TermsOfUseController::class,'show']);
        Route::put('update/{terms_of_use}',[\App\Http\Controllers\Api\cms\TermsOfUseController::class,'update']);
        Route::get('delete/{id}',[\App\Http\Controllers\Api\cms\TermsOfUseController::class,'destroy']);
        Route::get('restore/{id}',[\App\Http\Controllers\Api\cms\TermsOfUseController::class,'restore']);
        Route::get('preview/{id}',[\App\Http\Controllers\Api\cms\TermsOfUseController::class,'preview']);
    });
//about
    Route::prefix('about')->group(function (){
        Route::get('index', [\App\Http\Controllers\Api\cms\AboutController::class,'index']);
        Route::post('create',[\App\Http\Controllers\Api\cms\AboutController::class,'store']);
        Route::get('show/{about}',[\App\Http\Controllers\Api\cms\AboutController::class,'show']);
        Route::put('update/{about}',[\App\Http\Controllers\Api\cms\AboutController::class,'update']);
        Route::get('delete/{id}',[\App\Http\Controllers\Api\cms\AboutController::class,'destroy']);
        Route::get('restore/{id}',[\App\Http\Controllers\Api\cms\AboutController::class,'restore']);
        Route::get('preview/{id}',[\App\Http\Controllers\Api\cms\AboutController::class,'preview']);
    });
//news
    Route::prefix('news')->group(function (){
        Route::get('index', [\App\Http\Controllers\Api\cms\NewsController::class,'index']);
        Route::post('create',[\App\Http\Controllers\Api\cms\NewsController::class,'store']);
        Route::get('show/{news}',[\App\Http\Controllers\Api\cms\NewsController::class,'show']);
        Route::put('update/{news}',[\App\Http\Controllers\Api\cms\NewsController::class,'update']);
        Route::get('delete/{id}',[\App\Http\Controllers\Api\cms\NewsController::class,'destroy']);
        Route::get('restore/{id}',[\App\Http\Controllers\Api\cms\NewsController::class,'restore']);
        Route::get('preview/{id}',[\App\Http\Controllers\Api\cms\NewsController::class,'preview']);
    });
//partners
    Route::prefix('partners')->group(function (){
        Route::get('index', [\App\Http\Controllers\Api\cms\PartnerController::class,'index']);
        Route::post('create',[\App\Http\Controllers\Api\cms\PartnerController::class,'store']);
        Route::get('show/{partner}',[\App\Http\Controllers\Api\cms\PartnerController::class,'show']);
        Route::put('update/{partner}',[\App\Http\Controllers\Api\cms\PartnerController::class,'update']);
        Route::get('delete/{id}',[\App\Http\Controllers\Api\cms\PartnerController::class,'destroy']);
        Route::get('restore/{id}',[\App\Http\Controllers\Api\cms\PartnerController::class,'restore']);
    });

//carousel
    Route::prefix('carousels')->group(function (){
        Route::get('index', [\App\Http\Controllers\Api\cms\CarouselController::class,'index']);
        Route::post('create',[\App\Http\Controllers\Api\cms\CarouselController::class,'store']);
        Route::get('show/{carousel}',[\App\Http\Controllers\Api\cms\CarouselController::class,'show']);
        Route::post('update/{carousel}',[\App\Http\Controllers\Api\cms\CarouselController::class,'update']);
        Route::post('publish/{carousel}',[\App\Http\Controllers\Api\cms\CarouselController::class,'publish']);
        Route::get('delete/{id}',[\App\Http\Controllers\Api\cms\CarouselController::class,'destroy']);
        Route::get('restore/{id}',[\App\Http\Controllers\Api\cms\CarouselController::class,'restore']);
    });

//contact-us
    Route::prefix('contact_us')->group(function (){
        Route::get('index', [\App\Http\Controllers\Api\cms\ContactUsController::class,'index']);
        Route::get('show/{contact_us}',[\App\Http\Controllers\Api\cms\ContactUsController::class,'show']);
        Route::get('delete/{id}',[\App\Http\Controllers\Api\cms\ContactUsController::class,'destroy']);
        Route::get('restore/{id}',[\App\Http\Controllers\Api\cms\ContactUsController::class,'restore']);
    });

//logout
    Route::get('logout', [AuthController::class, 'logout']);
    Route::post('change-password',[AuthController::class,'changePassword']);

});

//Route::middleware('guest')->group(function () {
//    Route::get('register', [RegisteredUserController::class, 'create'])
//        ->name('register');
//
//    Route::post('register', [RegisteredUserController::class, 'store']);
//
//    Route::get('login', [AuthenticatedSessionController::class, 'create'])
//        ->name('login');
//
//    Route::post('login', [AuthenticatedSessionController::class, 'store']);
//
//    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
//        ->name('password.request');
//
//    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
//        ->name('password.email');
//
//    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
//        ->name('password.reset');
//
//    Route::post('reset-password', [NewPasswordController::class, 'store'])
//        ->name('password.update');
//});
//
//Route::middleware('auth:sanctum')->group(function () {
//    Route::get('verify-email', [EmailVerificationPromptController::class, '__invoke'])
//        ->name('verification.notice');
//
//    Route::get('verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
//        ->middleware(['signed', 'throttle:6,1'])
//        ->name('verification.verify');
//
//    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
//        ->middleware('throttle:6,1')
//        ->name('verification.send');
//
//    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
//        ->name('password.confirm');
//
//    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);
//
//    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
//        ->name('logout');
//});
