import { apiURL } from 'api/apiURL';
import { LoginDataForm } from 'model/market';

export const loginAPI = async (formData: LoginDataForm) => {
  const res = await fetch(`${apiURL}/accounts/login/`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};
