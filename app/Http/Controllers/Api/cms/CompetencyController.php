<?php

namespace App\Http\Controllers\Api\cms;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompetencyRequest;
use App\Http\Resources\CompetencyResource;
use App\Models\Competency;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class CompetencyController extends Controller
{
    public function index()
    {
        return CompetencyResource::collection(Competency::all());
    }

    public function detail(CompetencyRequest $request, $id){

        return new CompetencyResource(Competency::all()->find($id));
    }

    public function latest(){

        return CompetencyResource::collection(Competency::all()->sortBy('published_at'));
    }
}
