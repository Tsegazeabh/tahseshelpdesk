<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class UploadController extends Controller
{
    public function index(Request $request){
        $about = new About();
        $about->id = 0;
        $about->exists = true;
        $image = $about->addMediaFromRequest('file')->toMediaCollection('media');

//        Log::info($image);
        Log::info($image);
        return response()->json([
//            'location' => 'https://images.unsplash.com/photo-1597431793715-b4b71ddb5670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NzcwMTQzMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
            'location' => $image->getUrl().'?crop=entropy&fit=max&w=1080'
        ]);
    }
}
