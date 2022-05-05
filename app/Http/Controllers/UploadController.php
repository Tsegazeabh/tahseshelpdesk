<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


class UploadController extends Controller
{
    public function index(Request $request){

        try {
            $root_path = 'MyImages';
            $root_path_thumbnail = 'MyImages\thumbnail';
            $image = $request->file('file');
            $imagename = time() . '.' . $image->extension();
            $destinationPath = public_path($root_path_thumbnail);

            if(!file_exists($destinationPath)){
                mkdir($destinationPath, 0777, true);
            }

            $img = Image::make($image->path());
            $img->resize(100, 100, function ($constraint) {
                $constraint->aspectRatio();
            })->save($destinationPath . '/' . $imagename);
            $destinationPath = public_path($root_path);
            $image->move($destinationPath, $imagename);

            $images = array(
                "default" => url($root_path . '/' . $imagename),
                "800" => url($root_path . '/' . $imagename),
                "1024" => url($root_path . '/' . $imagename),
                "1920" => url($root_path . '/' . $imagename)
            );

            return response()->json([
                'location' => url($root_path. '/' . $imagename)
            ]);
        } catch (\Throwable $ex) {
            return response('unable to upload image');
        }
    }
}
