<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\PrivacyPolicyRequest;
use App\Http\Resources\PrivacyPolicyResource;
use App\Models\PrivacyPolicy;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class PrivacyPolicyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $privacy = PrivacyPolicy::all();
        Log::info($privacy);
        return PrivacyPolicyResource::collection(PrivacyPolicy::withTrashed()->paginate(5));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return PrivacyPolicyResource
     */
    public function store(PrivacyPolicyRequest $request)
    {
        try {
            Log::info($request);
            $privacy_policy = PrivacyPolicy::create($request->validated());
            return new PrivacyPolicyResource($privacy_policy);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PrivacyPolicy  $privacy_policy
     * @return PrivacyPolicyResource
     */
    public function show(PrivacyPolicy $privacy_policy)
    {
        try{
            return new PrivacyPolicyResource($privacy_policy);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\PrivacyPolicy  $privacy_policy
     * @return PrivacyPolicyResource
     */
    public function update(PrivacyPolicyRequest $request, PrivacyPolicy $privacy_policy)
    {
        try {
            $date = null;
            if ($request->published_at != null){
                $date = Carbon::parse($request->published_at);
            }
            Log::info($request);
            $privacy_policy->update([
                'title' => $request->title,
                'description' => $request->description,
                'is_published' => $request->is_published,
                'published_at' => $date,
            ]);
            return new PrivacyPolicyResource($privacy_policy);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PrivacyPolicy  $privacy_policy
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $privacy_policy = PrivacyPolicy::withTrashed()->where('id', $id)->firstOrFail();
            if ($privacy_policy->trashed()){

                $privacy_policy->forceDelete();
                return response()->json(['message'=>'successfully deleted']);
            }
            $privacy_policy->delete();
            return response()->json(['message'=>'Record successfully deleted']);

        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function restore($id){
        try {
            $privacy_policy = PrivacyPolicy::onlyTrashed()->where('id', $id)->firstOrFail();
            if ($privacy_policy->trashed()){
                Log::info('if');
                Log::info($privacy_policy);
                $privacy_policy->restore();

                return response()->json(['message'=>'successfully Restore']);
            }
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function preview($id){
        try {
            $privacy_policy = PrivacyPolicy::withTrashed()->where('id', $id)->get();
            return new PrivacyPolicyResource($privacy_policy);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
