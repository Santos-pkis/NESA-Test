import apiClient from "./apiClient";

interface NominationData {
  category: string;
  sub_category: string;
  competitive_type: string;
  status: string;
  name: string;
  email: string;
  organization: string;
  phone: string;
  social_media: string;
  document: File | null;
  achievements: string;
}

export const createNomination = async (data: NominationData): Promise<any> => {
  try {
    // Validate required fields
     // Debug: Verify category_id exists
    console.log('Service Layer - Received category_id:', data.category);
    
    if (!data.category) {
      throw new Error('Category  is required');
    }

    const payload = {
      category: data.category,
      sub_category: data.sub_category,
      competitive_type: data.competitive_type,
      status: data.status,
      name: data.name,
      email: data.email,
      organization: data.organization,
      phone: data.phone,
      social_media: data.social_media,
      document: data.document, // This should be a string path if not uploading file
      achievements: data.achievements
    };

    const response = await apiClient.post(
      "/api/nominations/create-nominate",
      payload, // Send as JSON
      {
        headers: {
          'Content-Type': 'application/json', // Ensure JSON content type
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