<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class ServiceController extends Controller
{
    public function index(){
        return ServiceResource::collection(Service::withTrashed()->paginate(5));
    }

    public function store(ServiceRequest $request){
        try {
            Log::info($request);
            $service = Service::create($request->validated());
            return new ServiceResource($service);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service  $service
    //     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        Log::info($service);
        return new ServiceResource($service);
//        return new JsonResponse($service);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Service  $service
    //     * @return ServiceResource
     */
    public function update(ServiceRequest $request,Service $service){
        try {
            $date = null;
            if ($request->published_at != null){
                $date = Carbon::parse($request->published_at);
            }
            Log::info($request);
            $service->update([
                'title' => $request->title,
                'description' => $request->description,
                'is_published' => $request->is_published,
                'published_at' => $date
            ]);
            return new ServiceResource($service);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id){
        try {
            $service = Service::withTrashed()->where('id', $id)->firstOrFail();
            if ($service->trashed()){

                $service->forceDelete();
                return response()->json(['message'=>'successfully deleted']);
            }
            $service->delete();
            return response()->json(['message'=>'Record successfully deleted']);

        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function restore($id){
        try {
            $service = Service::onlyTrashed()->where('id', $id)->firstOrFail();
            if ($service->trashed()){
                Log::info('if');
                Log::info($service);
                $service->restore();

                return response()->json(['message'=>'successfully Restored']);
            }
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function preview($id){
        try {
            $service = Service::withTrashed()->where('id', $id)->get();
            return new ServiceResource($service);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
