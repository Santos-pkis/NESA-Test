import apiClient from "./apiClient";

export const getJudgeDetail = async (id: string) => {
  try {
    const response = await apiClient.get(`/api/dashboardhttp://127.0.0.1:5000/api/dashboard/judges/application/${id}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
