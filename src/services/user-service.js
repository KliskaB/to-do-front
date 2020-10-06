import { HttpService } from './http-service';

const ENDPOINTS = {
  USER_LOGIN: `/users/login/`
};
class UserService extends HttpService {
  login = (data) => this.client.post(ENDPOINTS.USER_LOGIN, data)
                    .then(({ data }) => {
                      localStorage.setItem('access-token', data.access)
                      localStorage.setItem('refresh-token', data.refresh)
                      this.apiService.addHeader({
                        'Authorization': `Bearer ${data.access}`
                      });
                      return data
                    })
                  }

export const userService = new UserService();