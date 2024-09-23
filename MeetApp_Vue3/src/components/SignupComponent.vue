<template>
  <div>
    <h2>新規ユーザー登録</h2>
    <form @submit.prevent="createUser">
      <div>
        <label for="name">名前:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div>
        <label for="email">メールアドレス:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="password">パスワード:</label>
        <input type="password" id="password" v-model="formData.password" required />
      </div>
      <div>
        <label for="password_confirmation">パスワード確認:</label>
        <input type="password" id="password_confirmation" v-model="formData.password_confirmation" required />
      </div>
      <button type="submit">登録</button>
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
        name: '',
        email: '',
        password: '',
        password_confirmation: '', // パスワード確認用
      },
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async createUser() {
      try {
        await axios.post('http://localhost:8000/api/register', this.formData, {
          withCredentials: true, // セッションベース認証を使用する場合
        });
        this.successMessage = 'ユーザーが正常に登録されました！';
        this.errorMessage = '';
        // フォームをリセット
        this.formData = {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        };
      } catch (error) {
        this.successMessage = '';
        this.errorMessage = error.response?.data?.message || 'ユーザー登録に失敗しました。';
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
