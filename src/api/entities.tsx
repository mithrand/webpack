import { AxiosRequestConfig } from 'axios';

export const getEntity = (entityType:string, page:number = 1, pageSize:number = 50):AxiosRequestConfig => ({
  url:`/api/${entityType}/${page - 1}/${pageSize}`,
  method: 'GET',
  responseType: 'json',
});

export default {
  getEntity,
}