<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\AboutRequest;
use App\Http\Resources\AboutResource;
use App\Models\About;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AboutController extends Controller
{
    public function index(){

        return AboutResource::collection(About::all());
    }

    public function create(AboutRequest $request){
        try {
            $about = About::create($request->validated());
            Log::info($about);
            return response()->json(['message' => 'Successfully Created!','data' => $about]);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response()->json($exception);
        }
    }

    public function update(AboutRequest $request, $id){
        try {
            $about = About::all()->find($id);
            $about::update($request);
            return response()->json($about);
        }catch (\Throwable $exception){
            return response()->json($exception);
        }
    }
}
