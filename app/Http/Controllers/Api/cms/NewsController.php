<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsRequest;
use App\Http\Resources\NewsResource;
use App\Models\News;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return NewsResource::collection(News::withTrashed()->paginate(5));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return NewsResource
     */
    public function store(NewsRequest $request)
    {
        try {
            Log::info($request);
            $news = News::create($request->validated());
            return new NewsResource($news);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return NewsResource
     */
    public function show(News $news)
    {
        try{
            return new NewsResource($news);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\News  $news
     * @return NewsResource
     */
    public function update(NewsRequest $request, News $news)
    {
        try {
            $date = null;
            if ($request->published_at != null){
                $date = Carbon::parse($request->published_at);
            }
            Log::info($request);
            $news->update([
                'title' => $request->title,
                'description' => $request->description,
                'is_published' => $request->is_published,
                'published_at' => $date
            ]);
            return new NewsResource($news);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $news = News::withTrashed()->where('id', $id)->firstOrFail();
            if ($news->trashed()){

                $news->forceDelete();
                return response()->json(['message'=>'successfully deleted']);
            }
            $news->delete();
            return response()->json(['message'=>'Record successfully deleted']);

        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function restore($id){
        try {
            $news = News::onlyTrashed()->where('id', $id)->firstOrFail();
            if ($news->trashed()){
                Log::info('if');
                Log::info($news);
                $news->restore();

                return response()->json(['message'=>'successfully Restore']);
            }
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function preview($id){
        try {
            $news = News::withTrashed()->where('id', $id)->get();
            return new NewsResource($news);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
