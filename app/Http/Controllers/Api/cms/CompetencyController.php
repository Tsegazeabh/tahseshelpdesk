<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompetencyRequest;
use App\Http\Resources\CompetencyResource;
use App\Models\Competency;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class CompetencyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return CompetencyResource::collection(Competency::withTrashed()->paginate(5));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return CompetencyResource
     */
    public function store(CompetencyRequest $request)
    {
        try {
            Log::info($request);
            $competency = Competency::create($request->validated());
            return new CompetencyResource($competency);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Competency  $competency
     * @return CompetencyResource
     */
    public function show(Competency $competency)
    {
        try{
            Log::info($competency);
            return new CompetencyResource($competency);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Competency  $competency
     * @return CompetencyResource
//     * @return competencyResource
     */
    public function update(CompetencyRequest $request, Competency $competency)
    {
        try {
            $date = null;
            if ($request->published_at != null){
                $date = Carbon::parse($request->published_at);
            }
            Log::info($request);
            $competency->update([
                'title' => $request->title,
                'description' => $request->description,
                'is_published' => $request->is_published,
                'published_at' => $date
            ]);
            return new CompetencyResource($competency);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Competency  $competency
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $competency = Competency::withTrashed()->where('id', $id)->firstOrFail();
            if ($competency->trashed()){

                $competency->forceDelete();
                return response()->json(['message'=>'Record Successfully Deleted']);
            }
            $competency->delete();
            return response()->json(['message'=>'Record Successfully Archived']);

        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function restore($id){
        try {
            $competency = Competency::onlyTrashed()->where('id', $id)->firstOrFail();
            if ($competency->trashed()){
                Log::info('if');
                Log::info($competency);
                $competency->restore();

                return response()->json(['message'=>'successfully Restore']);
            }
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function preview($id){
        try {
            $competency = Competency::withTrashed()->where('id', $id)->get();
            return new CompetencyResource($competency);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
