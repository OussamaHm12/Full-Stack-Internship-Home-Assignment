// services/api.js
const API_BASE_URL = 'http://localhost:8080';

const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Error processing the CSV file');
  }

  return response.json();
};

const api = {
  uploadFile,
};

export default api;
