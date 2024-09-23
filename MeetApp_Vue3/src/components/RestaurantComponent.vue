<template>
    <div>
      <h1>My Restaurants</h1>
      <ul class="restaurants-list">
        <li v-for="restaurant in restaurants" :key="restaurant.id">
          <h2>{{ restaurant.title }}</h2>
          <!-- <p>{{ restaurant.url }}</p> -->
          <span>{{ restaurant.user.name }}さんからの希望</span> <!-- ユーザー名を表示 -->
          <a :href="restaurant.url" target="_blank">詳しくはここ</a>
        </li>
      </ul>
      <div v-if="loading">お店を読み込んでいます...</div>
      <div v-if="error">{{ error }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        restaurants: [],
        loading: true,
        error: '',
      };
    },
    created() {
      this.fetchRestaurants();
    },
    methods: {
      async fetchRestaurants() {
        try {
          const response = await axios.get('http://localhost:8000/api/restaurants', {
            withCredentials: true,
          });
          this.restaurants = response.data;
        } catch (err) {
          this.error = 'Failed to load restaurants';
          console.error(err);
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* スタイルの追加が必要であればここに記述 */
  ul.restaurants-list li{
    border:1px solid #000;
    margin:10px;
    padding:10px;
  }
  
  ul.restaurants-list li span{
    background-color: #ccc;
  }
  </style>