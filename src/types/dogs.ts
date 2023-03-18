export interface InterfaceDogs {
  message: DogBreedObject;
  status: string;
}

export interface DogBreedObject {
  [key: string]: string[];
}

export interface InterfaceBreedImage {
  message: string;
  status: string;
}

export interface InterfaceDogInfo {
  breed: string;
  subBreed: string;
  signal: AbortSignal;
}
