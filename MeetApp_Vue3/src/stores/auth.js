import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // ユーザー情報を保存する状態
  }),
  actions: {
    setUser(userData) {
      console.log('Saving user data to store:', userData); // デバッグ用
      this.user = userData; // ユーザー情報を状態に保存
      // ローカルストレージにユーザー情報を保存
      localStorage.setItem('user', JSON.stringify(userData));
    },
    clearUser() {
      this.user = null; // ログアウト時にユーザー情報をクリア
      // ローカルストレージからユーザー情報を削除
      localStorage.removeItem('user');
    },
    initializeAuth() {
      // ローカルストレージからユーザー情報を復元
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user, // ユーザーがログインしているか確認
    userName: (state) => state.user?.name || '', // ユーザー名を取得
    userEmail: (state) => state.user?.email || '', // ユーザーのメールアドレスを取得
  },
});
