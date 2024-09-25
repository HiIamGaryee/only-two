import { HttpResponse } from './types';

export const checkPostResponse = <T>(response: HttpResponse<T>): T => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(response.statusText || 'Unknown Error');
  }
}