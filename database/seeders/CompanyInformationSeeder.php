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
                'source_map' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.492958416255!2d38.775536314772616!3d9.018714791633283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8562f5dfb7cf%3A0x4f9ddc8e1f9cf00!2sTahses%20Information%20Communication%20Technology%20And%20Consultancy%20Plc!5e0!3m2!1sen!2set!4v1648816365211!5m2!1sen!2set',
                'description' => 'is a private business company established in 2012 by a team of experienced professionals whose specializations are Computer Science, Computer Engineering, Communication Engineering, Electronics Engineering, Electrical Engineering, Marketing, Finance and Law and with extensive experience in ICT.',
            ]);
        }
    }
}
