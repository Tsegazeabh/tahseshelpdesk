<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactUsRequest;
use App\Http\Resources\ContactUsResource;
use App\Http\Resources\ServiceResource;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class ContactUsController extends Controller
{
//    public function index()
//    {
//        return ContactUsResource::collection(ContactUs::all());
//    }

    public function store(ContactUsRequest $request){
        ContactUs::create($request->validated());
        return 'contacted successfully';
    }

//    public function latest(){
//
//        return ContactUsResource::collection(ContactUs::all()->sortBy('published_at'));
//    }
}
