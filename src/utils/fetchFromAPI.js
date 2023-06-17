import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
    regionCode: 'ID',
  },
  headers: {
    'X-RapidAPI-Key': 'd21ff569abmsh5af66e1197cf92ep1ac69fjsn83b41ed9578d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
