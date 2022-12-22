import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';
import type { TResponseFetch, TRequestFetch } from './blog';

export const fetchPosts = createAsyncThunk<TResponseFetch, TRequestFetch>(
  'blog/fetchPosts',
  async (params) => {
    const { postId } = params;
    try {
      const { data, success } = await Promise.resolve({
        data: Array(10).fill('demo'),
        success: true,
      });
      if (success) {
        if (data) {
          return Promise.resolve({});
        } else {
          return Promise.resolve({
            accNo: '',
            createNewAcc: 'Y',
            loanAccList: [],
          });
        }
      } else {
        notification.error({ message: 'Lỗi không lấy được dữ liệu' });
        return Promise.reject();
      }
    } catch (error) {
      notification.error({
        message: `Lỗi không lấy được dữ liệu`,
        description: error?.toString(),
      });
      return Promise.reject();
    }
  },
);
