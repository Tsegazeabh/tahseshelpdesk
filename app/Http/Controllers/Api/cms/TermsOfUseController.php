<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Resources\TermsOfUseResource;
use App\Models\TermsOfUse;
use Illuminate\Http\Request;

class TermsOfUseController extends Controller
{
    public function index(){

        return TermsOfUseResource::collection(TermsOfUse::all());
    }
}
