import type { AxiosInstance } from 'axios';
import axios from 'axios';

export class AuthService {
  protected readonly instance: AxiosInstance;

  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!',
    });
  }

  login = (clientName: string, clientEmail: string) => {
    return this.instance
      .post('/api/api-client', {
        clientName,
        clientEmail,
      })
      .then((res) => {
        return {
          accessToken: res.data.access_token,
        };
      });
  };
}
