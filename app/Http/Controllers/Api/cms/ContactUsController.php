<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactUsRequest;
use App\Http\Resources\ContactUsResource;
use App\Http\Resources\ServiceResource;
use App\Models\companyInformation;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class ContactUsController extends Controller
{
    public function index()
    {
        return ContactUsResource::collection(ContactUs::withTrashed()->orderBy('created_at','desc')->paginate());
    }

    public function show(ContactUs $contact_us)
    {
        return new ContactUsResource($contact_us);
    }

    public function destroy($id){

        try {
            $contact_us = ContactUs::withTrashed()->where('id', $id)->firstOrFail();
            if ($contact_us->trashed()){

                $contact_us->forceDelete();
                return response()->json(['message'=>'Record Successfully Deleted']);
            }
            $contact_us->delete();
            return response()->json(['message'=>'Record Successfully Archived']);

        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function restore($id){
        try {
            $contact_us = ContactUs::onlyTrashed()->where('id', $id)->firstOrFail();
            if ($contact_us->trashed()){
                $contact_us->restore();

                return response()->json(['message'=>'Request Successfully Restored']);
            }
        }catch (\Throwable $exception){
            return response($exception);
        }
    }

    public function fetch(){
        return response(companyInformation::all());
    }

    public function store(Request $request){
        try {
            $request->validate([
                'title'=>'required|string',
                'description'=>'required|string',
                'location'=>'required|string',
                'phone'=>'required|string',
                'email'=>'required|email',
                'source_map'=>'required',
            ]);

            $company = companyInformation::all()->first();
                $company['title'] = $request->title;
                $company['description'] = $request->description;
                $company['location'] = $request->location;
                $company['phone'] = $request->phone;
                $company['source_map'] = $request->source_map;
                $company['email'] = $request->email;
                $company->update();
            return response(['message'=>'Successfully Updated Company Information.']);
        }catch (\Throwable $exception){
            return response($exception);
        }
    }
}
