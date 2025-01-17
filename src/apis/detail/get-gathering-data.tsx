import axios from 'axios';
import { Toast } from '@/components/shared/Toast';
import type { BaseData } from '@/types/detail';

import { instance } from '../api';

export default async function getGatheringData(gatheringsId: number) {
  try {
    const res = await instance.get<BaseData>(`/api/gatherings/public/${gatheringsId}/reviews?page=1&size=10`);
    return res.data.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      throw e.response?.data;
    } else {
      Toast('error', '문제가 발생했습니다.');
      throw new Error('error');
    }
  }
}
