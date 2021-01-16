import axios from 'axios';

export default {
  symbols: async () => {
    const response = await axios.get('https://api.exchangeratesapi.io/latest');
    return response.data.rates;
  },
  history: async (date, baseCurrency) => {
    const config = {
      method: 'GET',
      url: `https://api.exchangeratesapi.io/${date}`,
      params: {
        base: baseCurrency,
      },
    };
    const response = await axios(config);
    return response.data.rates;
  },
};
