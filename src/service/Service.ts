import axios, { AxiosResponse } from 'axios';
import { CandlesParams, OrderBooksParams } from './Interfaces';

const instance = axios.create({
  baseURL: 'https://binance43.p.rapidapi.com',
  timeout: 10000,
  headers: {
    'x-rapidapi-key': '3b93b0c81emsh634b31cc6f8b195p153645jsn31953ccb9520',
    'x-rapidapi-host': 'binance43.p.rapidapi.com',
  },
});

export const GetCoins = async () => {
  try {
    const response:AxiosResponse = await instance.get('/ticker/24hr');
    console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    console.error('GetCoins error:', error);
    return null;
  }
};

export const GetOrderBooks = async (params: OrderBooksParams) => {
    try {
      const response:AxiosResponse = await instance.get('/depth', { params });
      return response.data;
    } catch (error) {
      console.error('GetOrderBooks error:', error);
      return null;
    }
};
export const GetCandles = async (params: CandlesParams) => {
    try {
      const response:AxiosResponse = await instance.get('/klines', { params });
      return response.data;
    } catch (error) {
      console.error('GetCandles error:', error);
      return null;
    }
};


