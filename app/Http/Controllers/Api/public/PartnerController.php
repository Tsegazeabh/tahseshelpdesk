<?php

namespace App\Http\Controllers\Api\public;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PartnerController extends Controller
{
    public function index(){
        try {
            return response(Partner::published()->orderBy('published_at','desc')->get());
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
