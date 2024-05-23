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

