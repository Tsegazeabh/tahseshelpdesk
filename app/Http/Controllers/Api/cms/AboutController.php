<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Resources\AboutResource;
use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index(){

        return AboutResource::collection(About::all());
    }
}
