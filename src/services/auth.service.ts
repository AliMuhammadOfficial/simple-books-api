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

  login = (username: string, password: string) => {
    return this.instance
      .post('/api/api-client', {
        username,
        password,
      })
      .then((res) => {
        return {
          clientName: res.data.userId,
          accessToken: res.data.access_token,
          expiredAt: res.data.expiredAt,
        };
      });
  };
}
