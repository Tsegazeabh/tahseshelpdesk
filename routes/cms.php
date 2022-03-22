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
        Route::get('manage', [\App\Http\Controllers\Api\cms\ServiceController::class,'show']);
        Route::post('create',[\App\Http\Controllers\Api\cms\ServiceController::class,'store']);
        Route::post('edit/{id}',[\App\Http\Controllers\Api\cms\ServiceController::class,'update']);
        Route::delete('archive/{id}',[\App\Http\Controllers\Api\cms\ServiceController::class,'archive']);
        Route::delete('delete/{id}',[\App\Http\Controllers\Api\cms\ServiceController::class,'destroy']);
        Route::post('restore/{id}',[\App\Http\Controllers\Api\cms\ServiceController::class,'restore']);
    });
//products
    Route::prefix('products')->group(function (){
        Route::get('manage', [\App\Http\Controllers\Api\cms\ProductController::class,'show']);
        Route::post('create',[\App\Http\Controllers\Api\cms\ProductController::class,'create']);
        Route::post('edit/{id}',[\App\Http\Controllers\Api\cms\ProductController::class,'update']);
        Route::delete('archive/{id}',[\App\Http\Controllers\Api\cms\ProductController::class,'archive']);
        Route::delete('delete/{id}',[\App\Http\Controllers\Api\cms\ProductController::class,'destroy']);
        Route::post('restore/{id}',[\App\Http\Controllers\Api\cms\ProductController::class,'restore']);
    });
//customers
    Route::prefix('customers')->group(function (){
        Route::get('manage', [\App\Http\Controllers\Api\cms\CustomerController::class,'show']);
        Route::post('create',[\App\Http\Controllers\Api\cms\CustomerController::class,'create']);
        Route::post('edit/{id}',[\App\Http\Controllers\Api\cms\CustomerController::class,'update']);
        Route::delete('archive/{id}',[\App\Http\Controllers\Api\cms\CustomerController::class,'archive']);
        Route::delete('delete/{id}',[\App\Http\Controllers\Api\cms\CustomerController::class,'destroy']);
        Route::post('restore/{id}',[\App\Http\Controllers\Api\cms\CustomerController::class,'restore']);
    });
//competencies
    Route::prefix('competencies')->group(function (){
        Route::get('manage', [\App\Http\Controllers\Api\cms\CompetencyController::class,'show']);
        Route::post('create',[\App\Http\Controllers\Api\cms\CompetencyController::class,'create']);
        Route::post('edit/{id}',[\App\Http\Controllers\Api\cms\CompetencyController::class,'update']);
        Route::delete('archive/{id}',[\App\Http\Controllers\Api\cms\CompetencyController::class,'archive']);
        Route::delete('delete/{id}',[\App\Http\Controllers\Api\cms\CompetencyController::class,'destroy']);
        Route::post('restore/{id}',[\App\Http\Controllers\Api\cms\CompetencyController::class,'restore']);
    });
//privacy_policy
    Route::prefix('privacy-policy')->group(function (){
        Route::get('manage', [\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'show']);
        Route::post('create',[\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'create']);
        Route::post('edit/{id}',[\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'update']);
        Route::delete('archive/{id}',[\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'archive']);
        Route::delete('delete/{id}',[\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'destroy']);
        Route::post('restore/{id}',[\App\Http\Controllers\Api\cms\PrivacyPolicyController::class,'restore']);
    });
//terms_of_use
    Route::prefix('terms-of-use')->group(function (){
        Route::get('manage', [\App\Http\Controllers\Api\cms\TermsOfUseController::class,'show']);
        Route::post('create',[\App\Http\Controllers\Api\cms\TermsOfUseController::class,'create']);
        Route::post('edit/{id}',[\App\Http\Controllers\Api\cms\TermsOfUseController::class,'update']);
        Route::delete('archive/{id}',[\App\Http\Controllers\Api\cms\TermsOfUseController::class,'archive']);
        Route::delete('delete/{id}',[\App\Http\Controllers\Api\cms\TermsOfUseController::class,'destroy']);
        Route::post('restore/{id}',[\App\Http\Controllers\Api\cms\TermsOfUseController::class,'restore']);
    });
//about
    Route::prefix('about')->group(function (){
        Route::get('manage', [\App\Http\Controllers\Api\cms\AboutController::class,'index']);
        Route::post('create',[\App\Http\Controllers\Api\cms\AboutController::class,'create']);
        Route::post('update/{id}',[\App\Http\Controllers\Api\cms\AboutController::class,'update']);
        Route::delete('archive/{id}',[\App\Http\Controllers\Api\cms\AboutController::class,'archive']);
        Route::delete('delete/{id}',[\App\Http\Controllers\Api\cms\AboutController::class,'destroy']);
        Route::post('restore/{id}',[\App\Http\Controllers\Api\cms\AboutController::class,'restore']);
    });
//contact-us
    Route::prefix('contact-us')->group(function (){
        Route::get('manage', [\App\Http\Controllers\Api\cms\ContactUsController::class,'show']);
        Route::delete('archive/{id}',[\App\Http\Controllers\Api\cms\ContactUsController::class,'archive']);
        Route::delete('delete/{id}',[\App\Http\Controllers\Api\cms\ContactUsController::class,'destroy']);
        Route::post('restore/{id}',[\App\Http\Controllers\Api\cms\ContactUsController::class,'restore']);
    });
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
