export interface IConfiguration {
  API_KEY?: string;
}

export const Configuration: IConfiguration = {
  API_KEY: process.env.REACT_APP_API_KEY,
}