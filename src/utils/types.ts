import { AxiosResponse } from 'axios';

export type HttpResponse<T> = AxiosResponse<T>;

// export interface HttpResponse<T> {
//     data: T;
//     status: number;
//     statusText: string;
//     headers: Record<string, string>;
//   }