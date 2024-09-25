<template>
    <div>
      <h1>My Restaurants</h1>
      <ul class="restaurants-list">
        <li v-for="restaurant in restaurants" 
        :key="restaurant.id"
        :class="{ selected: selectedRestaurant === restaurant.id }"  
        @click="selectRestaurant(restaurant.id)"
        >
          <h2>{{ restaurant.title }}</h2>
          <!-- <p>{{ restaurant.url }}</p> -->
          <span>{{ restaurant.user.name }}さん希望</span> <!-- ユーザー名を表示 -->
          <a :href="restaurant.url" target="_blank">詳しくはここ</a>
          <i
          class="delete-icon"
          v-if="selectedRestaurant === restaurant.id"
          @click.stop="deleteRestaurant(restaurant.id)"
        >
          ×
      </i>
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
        selectedRestaurant: null, // 選択されたレストランのID
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
          this.restaurants = response.data.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        } catch (err) {
          this.error = 'Failed to load restaurants';
          console.error(err);
        } finally {
          this.loading = false;
        }
      },

      selectRestaurant(id) {
      this.selectedRestaurant = id; // 選択したレストランのIDを設定
      },

      async deleteRestaurant(id) {
        if (confirm('このレストランを削除しますか？')) {
          try {
            await axios.delete(`http://localhost:8000/api/restaurants/${id}`, {
              withCredentials: true,
            });
            // 削除後、レストランリストを再取得
            this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== id);
            this.selectedRestaurant = null; // 選択をリセット
          } catch (err) {
            this.error = 'Failed to delete restaurant';
            console.error(err);
          }
        }
      },

    },
  };
  </script>
  
  <style scoped>
  ul.restaurants-list li {
    border: 3px solid #ddd;
    margin: 10px;
    padding: 10px;
    position: relative;
    cursor: pointer; /* カーソルをポインタに変更 */
    border-radius: 10px;
  }

  ul.restaurants-list li:hover {
    border: 3px solid #94d3fd;
  }

  ul.restaurants-list li.selected {
    border: 3px solid #009bff;
  }
  
  ul.restaurants-list li span {
    background-color: #ccc;
  }
  
  ul.restaurants-list li .delete-icon {
    position: absolute; /* ×を絶対位置に配置 */
    right: 10px; /* 右側に配置 */
    top: 10px; /* 上側に配置 */
    color: #009bff; /* ×の色を赤に */
    cursor: pointer; /* カーソルをポインタに変更 */
    font-weight: bold; /* 太字にする */
    display: inline-block; /* inline-blockにする */
    font-size:24px;
  }
  </style>