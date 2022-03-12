<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\CustomerResource;
use App\Http\Resources\ProductResource;
use App\Models\Customer;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductController extends Controller
{
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    public function detail(ProductRequest $request, $id){

        return new ProductResource(Product::all()->find($id));
    }

    public function latest(){

        return ProductResource::collection(Product::all()->sortBy('published_at'));
    }
}
