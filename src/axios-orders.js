import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-8bdbc-default-rtdb.firebaseio.com/'
})

export default instance;