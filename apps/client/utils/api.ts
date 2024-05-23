import { FormValues, Product } from "./type";

export const submitForm = async (productData: FormValues) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      const errorResponse = await response.json(); // Get error message from API response
      throw new Error(errorResponse.message || 'Failed to create product');
    }
  } catch (error) {
    throw error; // Re-throw the error to handle it where the function is called
  }
};



export const fetchProducts = async () :Promise<Product> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};


export const fetchProduct = async (productId: number): Promise<Product> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch product');
  }
  return data.data;
};