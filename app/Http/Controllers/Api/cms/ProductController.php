<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function index(){
        return ProductResource::collection(Product::withTrashed()->paginate(5));
    }

    public function store(ProductRequest $request){
        try {
            Log::info($request);
            $product = Product::create($request->validated());
            return new ProductResource($product);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
    //     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        Log::info($product);
        return new ProductResource($product);
//        return new JsonResponse($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
    //     * @return ProductResource
     */
    public function update(ProductRequest $request,Product $product){
        try {
            $date = null;
            if ($request->published_at != null){
                $date = Carbon::parse($request->published_at);
            }
            Log::info($request);
            $product->update([
                'title' => $request->title,
                'description' => $request->description,
                'is_published' => $request->is_published,
                'published_at' => $date,
                'price' => $request->price
            ]);
            return new ProductResource($product);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id){
        try {
            $product = Product::withTrashed()->where('id', $id)->firstOrFail();
            if ($product->trashed()){

                $product->forceDelete();
                return response()->json(['message'=>'successfully deleted']);
            }
            $product->delete();
            return response()->json(['message'=>'Record successfully deleted']);

        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function restore($id){
        try {
            $product = Product::onlyTrashed()->where('id', $id)->firstOrFail();
            if ($product->trashed()){
                Log::info('if');
                Log::info($product);
                $product->restore();

                return response()->json(['message'=>'successfully Restore']);
            }
        }catch (\Throwable $exception){
            return response($exception);
        }
    }
}
