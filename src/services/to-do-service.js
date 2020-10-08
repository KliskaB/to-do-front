import { HttpService } from "./http-service";

const ENDPOINTS = {
  TO_DOS: `/todos`,
};

class ToDoService extends HttpService {
  getAll = () => this.client.get(ENDPOINTS.TO_DOS);

  deleteItem = (id) => this.client.delete(ENDPOINTS.TO_DOS + `/${id}`);
}

export const toDoService = new ToDoService();
