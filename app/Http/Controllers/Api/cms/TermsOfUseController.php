<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\TermsOfUseRequest;
use App\Http\Resources\TermsOfUseResource;
use App\Models\TermsOfUse;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class TermsOfUseController extends Controller
{
    public function index(){
        return TermsOfUseResource::collection(TermsOfUse::withTrashed()->paginate(5));
    }

    public function store(TermsOfUseRequest $request){
        try {
            Log::info($request);
            $terms_of_use = TermsOfUse::create($request->validated());
            return new TermsOfUseResource($terms_of_use);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TermsOfUse  $terms_of_use
    //     * @return \Illuminate\Http\Response
     */
    public function show(TermsOfUse $terms_of_use)
    {
        Log::info($terms_of_use);
        return new TermsOfUseResource($terms_of_use);
//        return new JsonResponse($terms_of_use);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TermsOfUse  $terms_of_use
    //     * @return TermsOfUseResource
     */
    public function update(TermsOfUseRequest $request,TermsOfUse $terms_of_use){
        try {
            $date = null;
            if ($request->published_at != null){
                $date = Carbon::parse($request->published_at);
            }
            Log::info($request);
            $terms_of_use->update([
                'title' => $request->title,
                'description' => $request->description,
                'is_published' => $request->is_published,
                'published_at' => $date
            ]);
            return new TermsOfUseResource($terms_of_use);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TermsOfUse  $terms_of_use
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id){
        try {
            $terms_of_use = TermsOfUse::withTrashed()->where('id', $id)->firstOrFail();
            if ($terms_of_use->trashed()){

                $terms_of_use->forceDelete();
                return response()->json(['message'=>'successfully deleted']);
            }
            $terms_of_use->delete();
            return response()->json(['message'=>'Record successfully deleted']);

        }catch (\Throwable $exception){
            return response($exception);
        }
    }
    public function restore($id){
        try {
            $terms_of_use = TermsOfUse::onlyTrashed()->where('id', $id)->firstOrFail();
            if ($terms_of_use->trashed()){
                Log::info('if');
                Log::info($terms_of_use);
                $terms_of_use->restore();

                return response()->json(['message'=>'successfully Restore']);
            }
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function preview($id){
        try {
            $terms_of_use = TermsOfUse::withTrashed()->where('id', $id)->get();
            return new TermsOfUseResource($terms_of_use);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
