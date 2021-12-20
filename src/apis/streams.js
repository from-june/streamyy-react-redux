import axios from 'axios';

export const streams = axios.create({
  baseURL: 'https://react-redux-streamyy.herokuapp.com/'
});
