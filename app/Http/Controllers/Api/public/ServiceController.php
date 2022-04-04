<?php

namespace App\Http\Controllers\Api\public;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return response(Service::published()->paginate());
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function latest()
    {
        try {
            return response(Service::published()->orderBy('published_at', 'desc')->get()->take(6));
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        try {
            return response($service);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }

}
