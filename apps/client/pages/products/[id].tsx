// pages/products/[id].tsx
import { GetServerSideProps } from 'next';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/utils/type';

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
];

export const fetchProduct = async (productId: number): Promise<Product> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch product');
  }
  return data.data;
};
interface ProductDetailProps {
  productId: number;
}

export const getServerSideProps: GetServerSideProps<ProductDetailProps> = async (context) => {
  const productId = Number(context.params?.id);

  return {
    props: {
      productId,
    },
  };
};

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ['product', productId],
    queryFn: () => fetchProduct(productId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product?.name}</h2>
          <p className="mt-4 text-gray-500">{product?.description}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div  className="border-t border-gray-200 pt-3">
                <dt className="font-medium text-gray-900">TotalCarbonFootprint</dt>
                <dd className="mt-2 text-sm text-gray-500">{product?.impactData.totalCarbonFootprint}%</dd>
              </div>
              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">ReductionTargetCarbon</dt>
                <dd className="mt-2 text-sm text-gray-500">{product?.impactData.reductionTargetCarbon}</dd>
              </div>

              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">ReductionAchievementCarbon</dt>
                <dd className="mt-2 text-sm text-gray-500">{product?.impactData.reductionAchievementCarbon}</dd>
              </div>
              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">BioBased Content </dt>
                <dd className="mt-2 text-sm text-gray-500">{product?.impactData.bioBasedContent}</dd>
                <RoundProgressBar progress={product?.impactData.bioBasedContent}/>
              </div>
              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">WasteReduction</dt>
                <dd className="mt-2 text-sm text-gray-500">{product?.impactData.wasteReduction}</dd>
                <RoundProgressBar progress={product?.impactData.wasteReduction}/>

              </div>
              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">TotalWaterConsumption</dt>
                <dd className="mt-2 text-sm text-gray-500">{product?.impactData.totalWaterConsumption}</dd>
              </div>

              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">WaterRecycled</dt>
                <dd className="mt-2 text-sm text-gray-500">{product?.impactData.waterRecycled}</dd>
              </div>

              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">ReductionAchievementWater</dt>
                <dd className="mt-2 text-sm text-gray-500">{product?.impactData.reductionAchievementWater}</dd>
              </div>
              <div  className="border-t border-gray-200 pt-4">
                <div>
              <dt className="font-medium text-gray-900">MechanicalRecyclability</dt>
                <dd className="mt-2 text-sm text-gray-500">{product?.impactData.mechanicalRecyclability}%</dd>
                <ProgressBar progress={product?.impactData.mechanicalRecyclability} />
                </div>
                <dt className="font-medium text-gray-900">ChemicalRecyclability</dt>
                <dd className="mt-2 text-sm text-gray-500">{product?.impactData.chemicalRecyclability}%</dd>
                <div>
                <ProgressBar progress={product?.impactData.chemicalRecyclability} />
                <dt className="font-medium text-gray-900">NaturalRecyclability</dt>
                <dd className="mt-2 text-sm text-gray-500">{product?.impactData.naturalRecyclability}</dd>
                <ProgressBar progress={product?.impactData.naturalRecyclability} />
                </div>
              </div>

          </dl>
        </div>
        <div className="grid grid-cols-3 grid-rows-4 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/eco.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/eco.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/eco.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/eco.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


interface ProgressBarProps {
  progress: number; // progress value between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="bg-blue-500 h-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
interface RoundProgressBarProps {
  progress: number; // progress value between 0 and 100
}


const RoundProgressBar: React.FC<RoundProgressBarProps> = ({ progress }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg width="120" height="120" className="transform -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-blue-500"
          style={{ transition: 'stroke-dashoffset 0.35s' }}
        />
      </svg>
      <div className="absolute text-xl font-semibold text-gray-900">
        {progress}%
      </div>
    </div>
  );
};