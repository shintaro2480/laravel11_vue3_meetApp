<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): Response
    {
        // 認証
        if (!Auth::attempt($request->validated())) {
//            return response()->json(['message' => 'ログインに失敗しました。'], 401);
            return response(['message' => 'ログインに失敗しました。'], 401);
        }

        // 認証成功時にセッションを再生成
        $request->session()->regenerate();

        // ユーザー情報を返す
        $user = Auth::user();
        return response(['user' => $user]);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
