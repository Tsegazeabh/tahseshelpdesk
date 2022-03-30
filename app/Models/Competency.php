<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\InteractsWithMedia;

class Competency extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    protected $casts = [
        'published_at' => 'datetime:Y-m-d',
    ];
}
