import axios from 'axios';

const baseURL = process.env.REACT_APP_API_LINK;
export default axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
