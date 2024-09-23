import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // ユーザー情報を保存する状態
  }),
  actions: {
    setUser(userData) {
      console.log('Saving user data to store:', userData); // デバッグ用
      this.user = userData; // ユーザー情報を状態に保存
    },
    clearUser() {
      this.user = null; // ログアウト時にユーザー情報をクリア
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user, // ユーザーがログインしているか確認
    userName: (state) => state.user?.name || '', // ユーザー名を取得
    userEmail: (state) => state.user?.email || '', // ユーザーのメールアドレスを取得
  },
});
