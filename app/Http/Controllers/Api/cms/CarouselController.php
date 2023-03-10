<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Requests\CarouselRequest;
use App\Http\Resources\CarouselResource;
use App\Models\CarouselGallery;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;

class CarouselController extends Controller
{
    public function index(){
        return CarouselResource::collection(CarouselGallery::withTrashed()->paginate(5));
    }

    public function store(CarouselRequest $request){
        try {
            $root_path = 'MyImages';
            $root_path_thumbnail = 'MyImages\carousel';
            $image = $request->file('image');
            $imagename = time() . '.' . $image->extension();
            $destinationPath = public_path($root_path_thumbnail);

            if(!file_exists($destinationPath)){
                mkdir($destinationPath, 0777, true);
            }

            $img = Image::make($image->path());
            $img->save($destinationPath . '/' . $imagename);
            $destinationPath = public_path($root_path);
            $image->move($destinationPath, $imagename);

            CarouselGallery::create([
                'title' => $request->title,
                'description' => $request->description,
                'image' => url($root_path . '/' . $imagename)
            ]);

            return response()->json([
                'message' => 'Successfully Created Record.'
            ]);
        } catch (\Throwable $ex) {
            Log::error($ex);
            return response('Something went wrong!');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CarouselGallery  $carousel
    //     * @return \Illuminate\Http\Response
     */
    public function show(CarouselGallery $carousel)
    {
        Log::info($carousel);
        return new CarouselResource($carousel);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\CarouselGallery  $carousel
    //     * @return CarouselResource
     */
    public function update(Request $request,CarouselGallery $carousel){
        try {
            if($request->hasFile('image')){

                $request->validate([
                    'title'=>'required | string',
                    'description'=>'required | string',
                    'image'=>'required | image | mimes:jpeg,jpg,png,gif,svg',
                ]);

                $root_path = 'MyImages';
                $root_path_thumbnail = 'MyImages\carousel';
                $image = $request->file('image');
                $imagename = time() . '.' . $image->extension();
                $destinationPath = public_path($root_path_thumbnail);

                if(!file_exists($destinationPath)){
                    mkdir($destinationPath, 0777, true);
                }

                $img = Image::make($image->path());
                $img->save($destinationPath . '/' . $imagename);
                $destinationPath = public_path($root_path);
                $image->move($destinationPath, $imagename);

                    $carousel->update([
                        'title' => $request->title,
                        'description' => $request->description,
                        'image' => url($root_path . '/' . $imagename),
                    ]);
                return new CarouselResource($carousel);
            }

            $request->validate([
                'title'=>'required | string',
                'description'=>'required | string',
                'image'=>'required | string',
            ]);

            $carousel->update([
                'title' => $request->title,
                'description' => $request->description,
                'image' => $request->image,
            ]);

            return new CarouselResource($carousel);
        }catch (\Throwable $exception){
            Log::error($exception);
            return response($exception);
        }
    }

    public function publish(Request $request,CarouselGallery $carousel){
        try {
            $date = null;
            if ($request->published_at != null){
                $date = Carbon::parse($request->published_at);
            }
            $carousel->is_published = $request->is_published;
            $carousel->published_at = $date;
            $carousel->save();

            return response()->json(['message'=>'successfully published!']);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CarouselGallery  $carousel
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id){
        try {
            $carousel = CarouselGallery::withTrashed()->where('id', $id)->firstOrFail();
            if ($carousel->trashed()){

                $carousel->forceDelete();
                return response()->json(['message'=>'Record Successfully Deleted']);
            }
            $carousel->delete();
            return response()->json(['message'=>'Record Successfully Archived']);

        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function restore($id){
        try {
            $carousel = CarouselGallery::onlyTrashed()->where('id', $id)->firstOrFail();
            if ($carousel->trashed()){
                $carousel->restore();

                return response()->json(['message'=>'successfully Restore']);
            }
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function preview($id){
        try {
            $carousel = CarouselGallery::withTrashed()->where('id', $id)->get();
            return new CarouselResource($carousel);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
