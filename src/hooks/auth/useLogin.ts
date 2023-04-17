import Cookies from 'js-cookie';

import { authService } from '../../services';
import type { User } from '../../types/user';

export const useLogin = () => {
  const login = async (clientEmail: string, clientName: string) => {
    const user = await authService.login(clientEmail, clientName);
    if (user) {
      Cookies.set('apiClient ', JSON.stringify(user));
    }
    return user as User;
  };

  return { login };
};
