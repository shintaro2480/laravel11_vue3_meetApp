<template>
  <div>
    <h2>ログイン</h2>
    <form @submit.prevent="loginUser">
      <div>
        <label for="email">メールアドレス:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="password">パスワード:</label>
        <input type="password" id="password" v-model="formData.password" required />
      </div>
      <button type="submit">ログイン</button>
    </form>
    <!-- エラーメッセージ -->
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <!-- 成功メッセージ -->
    <div v-if="successMessage" class="success">{{ successMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    // CSRF Cookieを取得するメソッド
    async getCsrfToken() {
      try {
        // LaravelからCSRF Cookieを取得
        await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
          withCredentials: true,
        });
      } catch (error) {
        this.errorMessage = 'CSRFトークンの取得に失敗しました。';
      }
    },

    // ユーザーログインメソッド
    async loginUser() {
      try {
        // CSRFトークンを先に取得する
        await this.getCsrfToken();

        // ログインAPIへのリクエスト
        await axios.post('http://localhost:8000/api/login', this.formData, {
          withCredentials: true, // セッションベースの認証を有効にする
        });

        // ログイン成功時の処理
        this.successMessage = 'ログインに成功しました！';
        this.errorMessage = '';

        // ここで、ユーザーデータを取得してストアに保存したり、リダイレクト処理を行ったりすることも可能
      } catch (error) {
        // エラーメッセージを表示
        this.successMessage = '';
        this.errorMessage = error.response?.data?.message || 'ログインに失敗しました。';
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}

.success {
  color: green;
}
</style>
