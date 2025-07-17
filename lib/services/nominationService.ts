import apiClient from "./apiClient";

interface NominationData {
  nomineeFullName: string;
  awardSuperCategory: string;
  category: string;
  subCategory: string;
  achievements: string;
  socialImpact: string;
  sustainabilityEvidence: string;
  country: string;
  email: string;
  phone: string;
  whatsapp?: string;
  website: string;
  document: File | null;
  submittedByRole?: string;
}

export const createNomination = async (data: NominationData): Promise<any> => {
  try {
    // Validate required fields
    if (!data.nomineeFullName || !data.awardSuperCategory || !data.category || !data.subCategory) {
      throw new Error('Required fields are missing');
    }

    // Use FormData for file upload
    const formData = new FormData();
    formData.append('nomineeFullName', data.nomineeFullName);
    formData.append('awardSuperCategory', data.awardSuperCategory);
    formData.append('category', data.category);
    formData.append('subCategory', data.subCategory);
    formData.append('achievements', data.achievements);
    formData.append('socialImpact', data.socialImpact);
    formData.append('sustainabilityEvidence', data.sustainabilityEvidence);
    formData.append('country', data.country);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('website', data.website);
    if (data.whatsapp) formData.append('whatsapp', data.whatsapp);
    if (data.submittedByRole) formData.append('submittedByRole', data.submittedByRole);
    if (data.document) formData.append('document', data.document);

    const response = await apiClient.post(
      '/api/nominations/create-nominate',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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