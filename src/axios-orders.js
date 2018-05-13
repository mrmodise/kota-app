import axios from 'axios';

const instance =axios.create({
    baseURL: 'https://kota-app.firebaseio.com/'
});

export default instance;