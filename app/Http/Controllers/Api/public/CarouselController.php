<?php

namespace App\Http\Controllers\Api\public;

use App\Http\Controllers\Controller;
use App\Models\CarouselGallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return response(CarouselGallery::published()->orderBy('published_at','desc')->get());
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
