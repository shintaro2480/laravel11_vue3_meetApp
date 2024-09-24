<template>
  <div>
    <h2>新しいレストランを登録</h2>
    <form @submit.prevent="addRestaurant">
      <div>
        <label for="title">レストラン名:</label>
        <input type="text" id="title" v-model="title" required />
      </div>
      <div>
        <label for="url">URL:</label>
        <input type="url" id="url" v-model="url" required />
      </div>
      <button type="submit">登録</button>
    </form>

    <!-- 登録完了のメッセージ表示 -->
    <div v-if="successMessage">
      <p>{{ successMessage }}</p>
    </div>

    <!-- エラーメッセージの表示 -->
    <div v-if="errorMessage">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'pinia';
import { useAuthStore } from '@/stores/auth'; // PiniaのAuthストアをインポート

export default {
  data() {
    return {
      title: '',
      url: '',
      successMessage: '', // 成功時のメッセージ
      errorMessage: '' // エラー時のメッセージ
    };
  },
  computed: {
    // Piniaのstateをマッピング
    ...mapState(useAuthStore, ['user']),
  },
  methods: {
    async addRestaurant() {
      if (!this.user) {
        this.errorMessage = 'ログインが必要です。';
        return;
      }

      try {
        // APIにPOSTリクエストを送信してレストランを作成
        await axios.post('http://localhost:8000/api/restaurants', {
          title: this.title,
          url: this.url
        }, {
          withCredentials: true, // セッションベース認証を使用する場合
        }
      );

        // 成功メッセージを表示
        this.successMessage = 'レストランが正常に登録されました';
        this.clearForm(); // フォームをクリア

        // レストラン登録成功後にトップページにリダイレクト
        this.$router.push('/restaurant');

      } catch (error) {
        console.error(error);
        this.errorMessage = 'レストランの登録に失敗しました。';
      }
    },
    clearForm() {
      this.title = '';
      this.url = '';
      this.successMessage = '';
      this.errorMessage = '';
    }
  }
};
</script>

<style scoped>
/* 必要であればスタイルをここに追加 */
</style>