import { apiClient } from "./core/api.client.js";

export async function getQuestions(search = "") {
  const response = await apiClient.get("/api/questions", {
    params: { search },
  });

  return response.data;
}