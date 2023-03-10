<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = User::all()->where('email', 'admin@test.com')->first();
        if (!$user) {
            User::create([
                'name' => 'admin',
                'email' => 'admin@test.com',
                'password' => Hash::make('admin'),
            ]);
        }
    }
}
