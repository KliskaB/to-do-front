import axios from 'axios';
//import { Redirect } from "react-router-dom"; 
import { createHashHistory } from "history";

const history = createHashHistory();

export class ApiService {
    constructor(options = {}) {
        this.client = axios.create({
          baseURL: "http://localhost:8000/api",
          ...options
        });   
        this.client.interceptors.response.use(
          this.handleSuccessResponse,
          this.handleErrorResponse
        );
        this.unauthorizedCallback = () => {}; 
    }

    addHeader(headers) {
      this.client.defaults.headers = headers;
    }

    handleSuccessResponse(response) {
        return response;
    }

    handleErrorResponse = async error => {
        try {
          const { status } = error.response;
          switch (status) {
          case 401:
          case 403: {
            // redirektuj ga na login
            // <Redirect to='/login' />
            history.go("/login");
            break;
          }
          default:
            break;
          }
          return Promise.reject(error);
        } catch (e) {
          return Promise.reject(error);
        }
      };
}

const apiService = new ApiService();

export default apiService;