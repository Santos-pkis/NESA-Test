import apiClient from "./apiClient";

type Judge = {
  id: string;
  full_name: string;
  experience?: string;
  email?: string;
  upload_document?: string;
  phone_number?: string;
  state_and_region?: string;
  motivation_statement?: string;
  education_background?: string;
  upload_profile_image?: string;
  createdAt?: string;
  updatedAt?: string;
};

export const getjudges = async (): Promise<Judge[]> => {
  try {
    const response = await apiClient.get("api/judge-apply/applicants", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.applicants ?? [];
  } catch (error: any) {
    console.error("API Error:", {
      status: error.response?.status,
      data: error.response?.data,
      config: error.config,
    });
    throw error;
  }
};
