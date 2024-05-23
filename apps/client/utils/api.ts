import { FormValues } from "./type";

export const  submitForm = async (productData: FormValues) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error('Failed to create product');
    }

    const result = await response.json();
    console.log('Product created:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};



 export const availableCertificates =[
    { value: "Better Cotton", label: "Better Cotton" },
    { value: "Bluesign", label: "Bluesign" },
    { value: "Cradle To Cradle", label: "Cradle To Cradle" },
    { value: "Fair Trade", label: "Fair Trade" },
    { value: "Global Organic Textile Standard", label: "Global Organic Textile Standard" },
    { value: "Textile Exchange", label: "Textile Exchange" },
    { value: "Oeko-Tex", label: "Oeko-Tex" },
    { value: "Zque", label: "Zque" },
    { value: "Textile Exchange", label: "Textile Exchange" },
    { value: "Good Weave", label: "Good Weave"}

  ]
  
 



 export const fetchProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();
  };