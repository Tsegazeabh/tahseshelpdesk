<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Resources\PrivacyPolicyResource;
use App\Models\PrivayPolicy;
use Illuminate\Http\Request;

class PrivacyPolicyController extends Controller
{
    public function index(){
        return PrivacyPolicyResource::collection(PrivayPolicy::all());
    }
}
