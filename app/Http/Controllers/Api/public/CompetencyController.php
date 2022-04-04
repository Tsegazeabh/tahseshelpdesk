<?php

namespace App\Http\Controllers\Api\public;

use App\Http\Controllers\Controller;
use App\Models\Competency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CompetencyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return response(Competency::published()->orderBy('published_at','desc')->paginate());
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
            return response(Competency::published()->orderBy('published_at', 'desc')->get()->take(6));
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Competency $competency
     * @return \Illuminate\Http\Response
     */
    public function show(Competency $competency)
    {
        try {
            return response($competency);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
