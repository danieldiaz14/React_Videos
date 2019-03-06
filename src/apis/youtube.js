import axios from 'axios';
const KEY = 'AIzaSyAmdrE2loQ8VMgKh9LWAD2imSBE1jFvSVg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
    }
});