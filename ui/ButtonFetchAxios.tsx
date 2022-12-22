'use client';

import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';

export function ButtonFetchAxios() {
  return (
    <button
      onClick={() => axios.get('https://dummyjson.com/products/1')}
      className="whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
    >
      Axios
    </button>
  );
}
