import { InterfaceDogs, InterfaceBreedImage, InterfaceDogInfo, InterfaceDogBreedImages } from '../types/dogs';
import axiosInstance from '../index';
import { AxiosError, AxiosResponse } from 'axios';

export function fetchDogsData(): Promise<InterfaceDogs> {
  return axiosInstance.get(`/breeds/list/all`).then((res: AxiosResponse) => res.data);
}

export function fetchRandomBreedImages(): Promise<InterfaceDogBreedImages> {
  return axiosInstance.get(`/breeds/image/random/9`).then((res: AxiosResponse) => res.data);
}

export function fetchBreedImage(dogInfo: InterfaceDogInfo): Promise<InterfaceBreedImage> {
  return axiosInstance
    .get(`/breed/${dogInfo.breed}${dogInfo.subBreed ? `/${dogInfo.subBreed}` : ''}/images/random`, {
      signal: dogInfo.signal,
    })
    .then((res: AxiosResponse) => res.data)
    .catch((err: AxiosError) => {
      if (err.message !== 'canceled') {
        throw err;
      }
    });
}
