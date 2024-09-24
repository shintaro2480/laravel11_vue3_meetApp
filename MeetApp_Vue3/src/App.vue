<template>



  <div id="app">
    <UserInfo /> <!-- ユーザー情報を表示 -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/restaurant">行きたいお店</router-link> |
      <router-link to="/restaurantcreate">お店新規登録</router-link> |
      <router-link to="/signup">新規ユーザー登録</router-link> |
      <router-link to="/signin">ログイン</router-link> |
    </nav>
    <router-view />
  </div>

  <div class="flex justify-center">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
  <HelloWorld msg="JST飲み会決定アプリ" />


  <v-btn prepend-icon="$vuetify" variant="tonal">
    ログイン
  </v-btn>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UserInfo from './components/UserInfo.vue';
import { useAuthStore } from '@/stores/auth';

export default {
  name: 'App',
  components: {
    HelloWorld,
    UserInfo
  },
  created() {
    const authStore = useAuthStore();
    authStore.initializeAuth(); // アプリ起動時にユーザー情報を復元
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
