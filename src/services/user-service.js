import { HttpService } from './http-service';

const ENDPOINTS = {
  USER_LOGIN: `/users/login/`,
  USER_ME: `/users/me/`,
  USERS: `/users/`
};
class UserService extends HttpService {
  login = (data) => this.client.post(ENDPOINTS.USER_LOGIN, data)
                    .then(({ data }) => {
                      localStorage.setItem('access-token', data.access);
                      localStorage.setItem('refresh-token', data.refresh);
                      this.apiService.addHeader({
                        'Authorization': `Bearer ${data.access}`
                      });
                      return data
                    });
  
  getMe = (data) => this.client.get(ENDPOINTS.USER_ME)
                    .then(({ data }) => data);

  register = (data) => this.client.post(ENDPOINTS.USERS, data)
                       .then(({ data }) => {
                          console.log(data);
                          return data;
                       });
                    
}

export const userService = new UserService();