import { message, notification } from 'antd';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';
import _ from 'lodash';
import { stringify } from 'querystring';

//Request
axios.interceptors.request.use((request: AxiosRequestConfig<any>) => {
  console.log('====== interceptor request ::: ', request);
  return request;
});

//Response
axios.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    console.log('====== interceptor response ::: ', response);
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  },
);
