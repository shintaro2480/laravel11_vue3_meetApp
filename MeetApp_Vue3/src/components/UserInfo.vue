<template>
  <div v-if="isAuthenticated">
    <h2>ユーザー情報</h2>
    <p>名前: {{ userName }}</p>
    <p>メールアドレス: {{ userEmail }}</p>
  </div>
  <div v-else>
    <p>ログインしていません。</p>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
  computed: {
    isAuthenticated() {
      const authStore = useAuthStore();
      console.log('Is authenticated:', authStore.isAuthenticated); // デバッグ用
      return authStore.isAuthenticated;
    },
    userName() {
      const authStore = useAuthStore();
      console.log('User name:', authStore.userName); // デバッグ用
      return authStore.userName;
    },
    userEmail() {
      const authStore = useAuthStore();
      console.log('User email:', authStore.userEmail); // デバッグ用
      return authStore.userEmail;
    },
  },
};
</script>
