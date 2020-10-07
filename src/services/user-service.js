import { HttpService } from "./http-service";

const ENDPOINTS = {
  USER_LOGIN: `/users/login/`,
  USER_ME: `/users/me/`,
  USERS: `/users/`,
};

class UserService extends HttpService {
  login = async (payload) => {
    try {
      const { data } = await this.client.post(ENDPOINTS.USER_LOGIN, payload);
      localStorage.setItem("access-token", data.access);
      localStorage.setItem("refresh-token", data.refresh);
      this.apiService.addHeader({
        Authorization: `Bearer ${data.access}`,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  getMe = () => this.client.get(ENDPOINTS.USER_ME);

  getMeDef = (payload) => {
    try {
      if(!payload.accessToken) {
        return null;
      }
      this.apiService.addHeader({
        Authorization: `Bearer ${payload.accessToken}`,
      });
      return this.getMe();
    } catch (e) {
      console.log(e);
    }
  };

  register = (payload) => this.client.post(ENDPOINTS.USERS, payload);
}

export const userService = new UserService();
