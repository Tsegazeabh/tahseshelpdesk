<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\CustomersRequest;
use App\Http\Resources\CustomerResource;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CustomerController extends Controller
{
    public function index()
    {
        return CustomerResource::collection(Customer::all());
    }

    public function detail(CustomersRequest $request, $id){

        return new CustomerResource(Customer::all()->find($id));
    }

    public function latest(){

        return CustomerResource::collection(Customer::all()->sortBy('published_at'));
    }
}
