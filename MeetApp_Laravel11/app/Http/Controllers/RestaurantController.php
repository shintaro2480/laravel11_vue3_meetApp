<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RestaurantController extends Controller
{
    // 認証ユーザーのレストランを取得
    public function index()
    {
//        $restaurants = Auth::user()->restaurants; // ログインユーザーに関連するレストランを取得
        $restaurants = Auth::user()->restaurants()->with('user:id,name')->get();
        return response()->json($restaurants);
    }

    // 新しいレストランを作成
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'url' => 'required|string|max:255',
        ]);

        $restaurant = Auth::user()->restaurants()->create($validatedData); // 認証ユーザーに紐づくレストランを作成
        return response()->json($restaurant, 201);
    }

    // 指定されたレストランを取得
    public function show($id)
    {
        $restaurant = Auth::user()->restaurants()->findOrFail($id); // 認証ユーザーのレストランのみ取得可能
        return response()->json($restaurant);
    }

    // レストランの更新
    public function update(Request $request, $id)
    {
        $restaurant = Auth::user()->restaurants()->findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'url' => 'required|string|max:255',
        ]);

        $restaurant->update($validatedData);

        return response()->json($restaurant);
    }

    // レストランの削除
    public function destroy($id)
    {
        $restaurant = Auth::user()->restaurants()->findOrFail($id);
        $restaurant->delete();

        return response()->json(null, 204);
    }
}