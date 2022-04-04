<?php

namespace App\Http\Controllers\Api\public;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return response(News::published()->orderBy('published_at','desc')->paginate());
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
            return response(News::published()->orderBy('published_at', 'desc')->get()->take(4));
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param \App\Models\News $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        try {
            return response($news);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
