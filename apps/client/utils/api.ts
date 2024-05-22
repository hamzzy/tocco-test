import { FormValues } from "./type";

export const submitForm = async (formData: FormValues) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
  
    return response.json();
  };

