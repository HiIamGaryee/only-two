import api from "../utils/axiosConfig";

export const getAboutUs = async () => {
  try {
    const response = await api.get("/about-us");
    return response.data;
  } catch (error) {
    throw error;
  }
};
