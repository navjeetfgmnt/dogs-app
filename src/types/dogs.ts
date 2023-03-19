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

export interface InterfaceDogBreedImages {
  message: string[];
  status: string;
}

export interface InterfaceDogInfo {
  breed: string;
  subBreed: string;
  signal: AbortSignal;
}

export interface DogsState {
  data: InterfaceDogs | null;
  status: 'idle' | 'loading' | 'failed';
  breed: {
    data: InterfaceBreedImage | null;
    status: 'idle' | 'loading' | 'failed';
  };
  breedImages: {
    data: InterfaceDogBreedImages | null;
    status: 'idle' | 'loading' | 'failed';
  };
}
