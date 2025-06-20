import apiClient from "./apiClient";

export const getJudgeDetail = async (id: string) => {
  try {
    const response = await apiClient.get(`/api/dashboard/judge/${id}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
