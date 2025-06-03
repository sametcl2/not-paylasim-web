import { LocalStorageKeys } from "@/constants/storage";
import { AuthType, UserType } from "@/types/auth";

export const getUserFromLocalStorage = () => {
  const accessToken = localStorage.getItem(LocalStorageKeys.AccessToken);
  const refreshToken = localStorage.getItem(LocalStorageKeys.RefreshToken);
  const user = localStorage.getItem(LocalStorageKeys.User);

  const parsedUser = user ? (JSON.parse(user) as UserType) : null;

  return { accessToken, refreshToken, user: parsedUser };
};

export const saveUserToLocalStorage = (data: AuthType) => {
  localStorage.setItem(LocalStorageKeys.AccessToken, data.accessToken);
  localStorage.setItem(LocalStorageKeys.RefreshToken, data.refreshToken);
  localStorage.setItem(LocalStorageKeys.User, JSON.stringify(data.user));
};

export const removeUserFromLocalStorage = () => {
  try {
    localStorage.removeItem(LocalStorageKeys.AccessToken);
    localStorage.removeItem(LocalStorageKeys.RefreshToken);
    localStorage.removeItem(LocalStorageKeys.User);
  } catch (error) {
    localStorage.clear();
  }
};
