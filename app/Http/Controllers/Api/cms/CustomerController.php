<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerRequest;
use App\Http\Resources\CustomerResource;
use App\Models\Customer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return CustomerResource::collection(Customer::withTrashed()->paginate(5));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return CustomerResource
     */
    public function store(CustomerRequest $request)
    {
        try {
            Log::info($request);
            $customer = Customer::create($request->validated());
            return new CustomerResource($customer);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return CustomerResource
     */
    public function show(Customer $customer)
    {
        try{
            return new CustomerResource($customer);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return CustomerResource
     */
    public function update(CustomerRequest $request, Customer $customer)
    {
        try {
            $date = null;
            if ($request->published_at != null){
                $date = Carbon::parse($request->published_at);
            }
            Log::info($request);
            $customer->update([
                'title' => $request->title,
                'description' => $request->description,
                'url' => $request->url,
                'is_published' => $request->is_published,
                'published_at' => $date
            ]);
            return new CustomerResource($customer);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $customer = Customer::withTrashed()->where('id', $id)->firstOrFail();
            if ($customer->trashed()){

                $customer->forceDelete();
                return response()->json(['message'=>'successfully deleted']);
            }
            $customer->delete();
            return response()->json(['message'=>'Record successfully deleted']);

        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function restore($id){
        try {
            $customer = Customer::onlyTrashed()->where('id', $id)->firstOrFail();
            if ($customer->trashed()){
                Log::info('if');
                Log::info($customer);
                $customer->restore();

                return response()->json(['message'=>'successfully Restore']);
            }
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function preview($id){
        try {
            $customer = Customer::withTrashed()->where('id', $id)->get();
            return new CustomerResource($customer);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
