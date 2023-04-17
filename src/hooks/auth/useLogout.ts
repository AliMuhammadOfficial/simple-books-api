import Cookies from 'js-cookie';

export const useLogout = () => {
  const logout = () => {
    Cookies.remove('apiClient');
  };

  return { logout };
};
