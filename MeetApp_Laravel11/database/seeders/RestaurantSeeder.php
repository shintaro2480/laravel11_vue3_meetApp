<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Restaurant;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // user_id 1に紐づくレストランを作成
        Restaurant::create([
            'user_id' => 1,
            'title' => 'Restaurant A',
            'url' => 'https://restaurant-a.com',
        ]);

        Restaurant::create([
            'user_id' => 1,
            'title' => 'Restaurant B',
            'url' => 'https://restaurant-b.com',
        ]);

        Restaurant::create([
            'user_id' => 1,
            'title' => 'Restaurant C',
            'url' => 'https://restaurant-c.com',
        ]);

        // user_id 2に紐づくレストランを作成
        Restaurant::create([
            'user_id' => 2,
            'title' => 'Restaurant X',
            'url' => 'https://restaurant-x.com',
        ]);

        Restaurant::create([
            'user_id' => 2,
            'title' => 'Restaurant Y',
            'url' => 'https://restaurant-y.com',
        ]);

        Restaurant::create([
            'user_id' => 2,
            'title' => 'Restaurant Z',
            'url' => 'https://restaurant-z.com',
        ]);
    }
}