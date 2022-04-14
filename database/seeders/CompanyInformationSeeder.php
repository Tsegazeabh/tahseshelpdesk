<?php

namespace Database\Seeders;

use App\Models\companyInformation;
use Illuminate\Database\Seeder;

class CompanyInformationSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $companyInfo = companyInformation::all();
        if ($companyInfo->count() === 0) {
            companyInformation::create([
                'location' => '22 Rewina building 4th floor',
                'email' => ' info@thetahses.com',
                'phone' => ' +251-11-896-43-43',
                'title' => 'Tahses ICT and Consultancy',
                'description' => 'is a private business company established in 2012 by a team of experienced professionals whose specializations are Computer Science, Computer Engineering, Communication Engineering, Electronics Engineering, Electrical Engineering, Marketing, Finance and Law and with extensive experience in ICT.',
            ]);
        }
    }
}
