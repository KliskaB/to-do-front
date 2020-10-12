import { HttpService } from "./http-service";

const ENDPOINTS = {
  TO_DOS: `/todos`,
};

class ToDoService extends HttpService {
  getAll = () => this.client.get(ENDPOINTS.TO_DOS);

  getItem = (id) => this.client.get(ENDPOINTS.TO_DOS + `/${id}`);

  deleteItem = (id) => this.client.delete(ENDPOINTS.TO_DOS + `/${id}`);

  editItem = (data) => this.client.put(ENDPOINTS.TO_DOS + `/${data.id}/`, data);
}

export const toDoService = new ToDoService();
