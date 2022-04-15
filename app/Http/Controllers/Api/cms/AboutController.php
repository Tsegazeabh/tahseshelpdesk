<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\AboutRequest;
use App\Http\Resources\AboutResource;
use App\Models\About;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;

class AboutController extends Controller
{

    public function index(){
        return AboutResource::collection(About::withTrashed()->paginate(Config::get('custom_config.paginate')));
    }

    public function store(AboutRequest $request){
        try {
            Log::info($request);
            $about = About::create($request->validated());
            return new AboutResource($about);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\About  $about
//     * @return \Illuminate\Http\Response
     */
    public function show(About $about)
    {
        Log::info($about);
        return new AboutResource($about);
//        return new JsonResponse($about);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\About  $about
//     * @return AboutResource
     */
    public function update(AboutRequest $request,About $about){
        try {
            $date = null;
            if ($request->published_at != null){
                $date = Carbon::parse($request->published_at);
            }
            Log::info($request);
            $about->update([
                'title' => $request->title,
                'description' => $request->description,
                'is_published' => $request->is_published,
                'published_at' => $date
            ]);
            return new AboutResource($about);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\About  $about
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id){
        try {
            $about = About::withTrashed()->where('id', $id)->firstOrFail();
            if ($about->trashed()){

                $about->forceDelete();
                return response()->json(['message'=>'Record Successfully Deleted']);
            }
                $about->delete();
                return response()->json(['message'=>'Record Successfully Archived']);

        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function restore($id){
        try {
            $about = About::onlyTrashed()->where('id', $id)->firstOrFail();
            if ($about->trashed()){
                Log::info('if');
                Log::info($about);
                $about->restore();

                return response()->json(['message'=>'successfully Restore']);
            }
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
//     * @return \Illuminate\Http\Response
     * @return AboutResource
     */
    public function preview($id){
        try {
            $about = About::withTrashed()->where('id', $id)->get();
            return new AboutResource($about);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
