import * as Yup from 'yup';
interface Certificate {
    name: string;
    url: string;
}

const certificate_image: Certificate[] = [
    {
        "name": "Better Cotton",
        "url": "https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/certificate-logo/better-cotton.jpeg"
    },
    {
        "name": "Bluesign",
        "url": "https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/certificate-logo/bluesign.jpg"
    },
    {
        "name": "Cradle To Cradle",
        "url": "https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/certificate-logo/cradle-to-cradle.jpg"
    },
    {
        "name": "Fair Trade",
        "url": "https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/certificate-logo/fair_trade.jpg"
    },
    {
        "name": "Good Weave",
        "url": "https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/certificate-logo/goodweave.jpg"
    },
    {
        "name": "Global Organic Textile Standard",
        "url": "https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/certificate-logo/gots.jpg"
    },
    {
        "name": "Oeko-Tex",
        "url": "https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/certificate-logo/oek-tex.jpeg"
    },
    {
        "name": "Textile Exchange",
        "url": "https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/certificate-logo/textile.jpeg"
    },
    {
        "name": "Zque",
        "url": "https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/certificate-logo/zque.jpeg"
    }
];

export function getUrlByName(name: string): string | null {
    const certificate = certificate_image.find(cert => cert.name === name);
    return certificate ? certificate.url : null;
}


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


  export const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    impactData: Yup.object({
        totalCarbonFootprint: Yup.number()
        .min(0, 'Total carbon footprint must be at least 0')
        .max(100, 'Total carbon footprint must be at most 100')
        .required('Total carbon footprint is required'),
      reductionTargetCarbon: Yup.number()
        .min(0, 'Reduction target carbon must be at least 0')
        .max(100, 'Reduction target carbon must be at most 100')
        .required('Reduction target carbon is required'),
      bioBasedContent: Yup.number()
        .min(0, 'Bio-based content must be at least 0')
        .max(100, 'Bio-based content must be at most 100')
        .required('Bio-based content is required'),
      wasteReduction: Yup.number()
        .min(0, 'Waste reduction must be at least 0')
        .max(100, 'Waste reduction must be at most 100')
        .required('Waste reduction is required'),
      waterRecycled: Yup.number()
        .min(0, 'Water recycled must be at least 0')
        .max(100, 'Water recycled must be at most 100')
        .required('Water recycled is required'),
      mechanicalRecyclability: Yup.number()
        .min(0, 'Mechanical recyclability must be at least 0')
        .max(100, 'Mechanical recyclability must be at most 100')
        .required('Mechanical recyclability is required'),
      chemicalRecyclability: Yup.number()
        .min(0, 'Chemical recyclability must be at least 0')
        .max(100, 'Chemical recyclability must be at most 100')
        .required('Chemical recyclability is required'),
      naturalRecyclability: Yup.number()
        .min(0, 'Natural recyclability must be at least 0')
        .max(100, 'Natural recyclability must be at most 100')
        .required('Natural recyclability is required'),
      totalWaterConsumption: Yup.number()
        .min(0, 'Total water consumption must be at least 0')
        .max(100, 'Total water consumption must be at most 100')
        .required('Total water consumption is required'),
    }),
    certificates: Yup.array().min(1, 'At least one certificate is required').required('Required'),
  });
  