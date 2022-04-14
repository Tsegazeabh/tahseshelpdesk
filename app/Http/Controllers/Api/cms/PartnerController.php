<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\PartnerRequest;
use App\Http\Resources\PartnerResource;
use App\Models\Partner;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;

class PartnerController extends Controller
{
    public function index(){
        return PartnerResource::collection(Partner::withTrashed()->paginate(5));
    }

    public function store(PartnerRequest $request){
        try {
            Log::info($request);
            $partner = Partner::create($request->validated());
            return new PartnerResource($partner);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Partner  $partner
    //     * @return \Illuminate\Http\Response
     */
    public function show(Partner $partner)
    {
//        Log::info(Config::get('custom_config.base_url').');
        return new PartnerResource($partner);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Partner  $partner
    //     * @return PartnerResource
     */
    public function update(PartnerRequest $request,Partner $partner){
        try {
            $date = null;
            if ($request->published_at != null){
                $date = Carbon::parse($request->published_at);
            }
            Log::info($request);
            $partner->update([
                'title' => $request->title,
                'description' => $request->description,
                'is_published' => $request->is_published,
                'url' => $request->url,
                'published_at' => $date
            ]);
            return new PartnerResource($partner);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        try {
            $partner = Partner::withTrashed()->where('id', $id)->firstOrFail();
            if ($partner->trashed()){

                $partner->forceDelete();
                return response()->json(['message'=>'successfully deleted']);
            }
            $partner->delete();
            return response()->json(['message'=>'Record successfully deleted']);

        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function restore($id){
        try {
            $partner = Partner::onlyTrashed()->where('id', $id)->firstOrFail();
            if ($partner->trashed()){
                Log::info('if');
                Log::info($partner);
                $partner->restore();

                return response()->json(['message'=>'successfully Restore']);
            }
        }catch (\Throwable $exception){
            return response($exception);
        }
    }
}
