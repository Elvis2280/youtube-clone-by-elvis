import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyDtnDIHTJHvz-7QpYWGUFu348oZwYBhD7k',
    maxResults: 6,
    part: 'snippet',
    type: 'video',
  },
});
