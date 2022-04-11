<?php

namespace App\Http\Controllers\Api\public;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactUsRequest;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ContactUsController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContactUsRequest $request)
    {
        try {
            ContactUs::create($request->validated());
                return response(['message'=>'Successfully Sent a Requested.']);
        }catch(\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }

}
