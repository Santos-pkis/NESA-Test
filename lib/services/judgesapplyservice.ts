import apiClient from "./apiClient";

// Validation schema
interface ApplicationData {
    fullName: string;
    email: string;
    phone: string;
    state: string;
    education: string;
    experience: string;
    motivation: string;
    profileImage: File | null;
    documents: File | null;
}

export const judgesapplication = async (data: ApplicationData): Promise<any> => {
    try {
  
        // Prepare payload
        const payload = {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            state: data.state,
            education: data.education,
            experience: data.experience,
            motivation: data.motivation,
            profileImage: data.profileImage,
            documents: data.documents
        };

    const response = await apiClient.post(
      "/api/judges/judge",
      payload, // Send as JSON
      {
        headers: {
          'Content-Type': 'application/json', 
        }
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('API Error:', {
      status: error.response?.status,
      data: error.response?.data,
      config: error.config
    });
    throw error;
  }
};