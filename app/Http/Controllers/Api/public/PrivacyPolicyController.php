<?php

namespace App\Http\Controllers\Api\public;

use App\Http\Controllers\Controller;
use App\Models\PrivacyPolicy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PrivacyPolicyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return response(PrivacyPolicy::published()->orderBy('published_at','desc')->get()->take(1));
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
