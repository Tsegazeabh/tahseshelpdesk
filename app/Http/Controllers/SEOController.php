<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\Competency;
use App\Models\News;
use App\Models\Product;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Spatie\Sitemap\Sitemap;
use \Spatie\Sitemap\Tags\Url;

class SEOController extends Controller
{

    public function generateSitemap()
    {
        try {
            $sitemap = Sitemap::create();

            $lastPublishedDate = Carbon::today();
            $url= Url::create('https://thetahses.com')->setLastModificationDate($lastPublishedDate);
            $sitemap->add($url);

            $AboutlastPublishedDate = Carbon::now();
            if(About::published()->exists()){
                $AboutlastPublishedDate = About::published()->orderBy('published_at')->first()->published_at;
            }
            $url= Url::create('https://thetahses.com/about_index')->setLastModificationDate($AboutlastPublishedDate);
            $sitemap->add($url);

            $ServicelastPublishedDate = Carbon::now();
            if(Service::published()->exists()){
                $ServicelastPublishedDate = About::published()->orderBy('published_at')->first()->published_at;
            }
            $url= Url::create('https://thetahses.com/services_index')->setLastModificationDate($ServicelastPublishedDate);
            $sitemap->add($url);

            $ProductlastPublishedDate = Carbon::now();
            if(Product::published()->exists()){
                $ProductlastPublishedDate = About::published()->orderBy('published_at')->first()->published_at;
            }
            $url= Url::create('https://thetahses.com/products_index')->setLastModificationDate($ProductlastPublishedDate);
            $sitemap->add($url);

            $CompetencylastPublishedDate = Carbon::now();
            if(Competency::published()->exists()){
                $CompetencylastPublishedDate = About::published()->orderBy('published_at')->first()->published_at;
            }
            $url= Url::create('https://thetahses.com/competencies_index')->setLastModificationDate($CompetencylastPublishedDate);
            $sitemap->add($url);

            $NewslastPublishedDate = Carbon::now();
            if(News::published()->exists()){
                $NewslastPublishedDate = About::published()->orderBy('published_at')->first()->published_at;
            }
            $url= Url::create('https://thetahses.com/news_index')->setLastModificationDate($NewslastPublishedDate);
            $sitemap->add($url);

            $sitemap->writeToFile(public_path('sitemap.xml'));

            return response()->file(public_path('sitemap.xml'));

        } catch (\Throwable $ex) {
            Log::info($ex);
            return response($ex);
        }
    }
}
