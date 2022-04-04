<?php

namespace App\Http\Controllers\Api\public;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return response(Customer::published()->orderBy('published_at','desc')->paginate());
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function latest()
    {
        try {
            return response(Customer::published()->orderBy('published_at', 'desc')->get()->take(8));
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param \App\Models\Customer $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        try {
            return response($customer);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
