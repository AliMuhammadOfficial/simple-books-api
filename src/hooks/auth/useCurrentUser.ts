import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { authService } from '../../services';
import type { ApiClient } from '../../types/user';

export const useCurrentUser = () => {
  const [apiClientState, setApiClientState] = useState<ApiClient | null>(null);

  useEffect(() => {
    const apiClient = Cookies.get('apiClient');
    if (apiClient) {
      setApiClientState(JSON.parse(apiClient));
    }
  }, []);

  const refetchUser = async (apiClientId: string) => {
    const apiClientInfo = await authService.getMe(apiClientId);
    const apiClient = Cookies.get('apiClient');

    if (apiClientInfo && apiClient) {
      const newApiClient = {
        ...JSON.parse(apiClient),
        clientEmail: apiClientInfo.clientEmail,
        clientName: apiClientInfo.clientName,
      };
      Cookies.set('apiClient', JSON.stringify(newApiClient));
      setApiClientState(newApiClient);
    }
  };

  return { apiClientState, refetchUser };
};
