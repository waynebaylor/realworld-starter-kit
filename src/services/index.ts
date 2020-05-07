export interface ServiceResp<T> {
  hasErrors: boolean;
  response: T;
}

export interface ErrorResp {
  errors: {
    [key: string]: string[];
  };
}
