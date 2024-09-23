import axios from 'axios';





// Axiosのデフォルト設定
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.withCredentials = true; // クッキーを含める

// CSRFトークンをヘッダーに追加
axios.defaults.headers.common['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN');

// Cookieからトークンを取得する関数
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


export default axios;
