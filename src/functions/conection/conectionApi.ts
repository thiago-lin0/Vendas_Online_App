import axios from 'axios';

import { MethodEnum } from '../../assets/enums/Method.enum';

export type MethodType = 'get' | 'post' | 'put' | 'patch' | 'delete';

export default class ConectionApi {
  static async call<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
    switch (method) {
      case MethodEnum.GET:
      case MethodEnum.DELETE:
        return (await axios[method]<T>(url)).data;
      case MethodEnum.POST:
      case MethodEnum.PATCH:
      case MethodEnum.PUT:
      default:
        return (await axios[method]<T>(url, body)).data;
    }
  }

  static async connect<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
    return ConectionApi.call<T>(url, method, body).catch((error) => {
      if (error.reponse) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error('Sem permissão');
          default:
            throw new Error('Sem conexão com o backend');
        }
      }
      throw new Error('Sem conexão com o backend');
    });
  }
}

export const connectApiGet = async <T>(url: string): Promise<T> => {
  return ConectionApi.connect(url, MethodEnum.GET);
};

export const connectApiDelete = async <T>(url: string): Promise<T> => {
  return ConectionApi.connect(url, MethodEnum.DELETE);
};

export const connectApiPost = async <T>(url: string, body: unknown): Promise<T> => {
  return ConectionApi.connect(url, MethodEnum.POST, body);
};

export const connectApiPut = async <T>(url: string, body: unknown): Promise<T> => {
  return ConectionApi.connect(url, MethodEnum.PUT, body);
};

export const connectApiPatch = async <T>(url: string, body: unknown): Promise<T> => {
  return ConectionApi.connect(url, MethodEnum.PATCH, body);
};
