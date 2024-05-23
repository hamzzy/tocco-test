// pages/products/[id].tsx
import { GetServerSideProps } from 'next';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/utils/type';
import { getUrlByName } from '@/utils';
import { ImageAssetURL } from '@/utils/constat';
import { fetchProduct } from '@/utils/api';



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
    return <div className="skeleton w-32 h-32"></div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (


    <div className="bg-white">
      <div className="pt-6">
        <h1 className="text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">{product?.title}</h1>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-1 lg:border-r lg:border-gray-200 lg:pr-8">
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                  src={ImageAssetURL + product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className='mt-10'>
                <h2 className="text-sm font-medium leading-6 text-gray-900">Description</h2>
              </div>
              <div className="space-y-6">
                <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product?.description}</p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:col-span-2 container">



              <div>
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Product Information</h3>
                </div>
                <div className="mt-6 border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Carbon Impact</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">

                        <div className="grid grid-cols-3 gap-4 ">
                          <div className="stat">
                            <div className="stat-title text-sm text-gray-700">Total Carbon Footprint</div>
                            <div className="stat-value text-sm text-gray-700">{product?.impactData?.totalCarbonFootprint}%</div>
                            <div className="stat-title  text-sm text-gray-500">Total Water Consumption</div>
                            <div className="stat-value text-sm text-gray-700">{product?.impactData?.totalWaterConsumption}%</div>
                          </div>
                          <div className="stat">
                            <div className="stat-title text-sm text-gray-700">Reduction Target Carbon</div>
                            <div className="stat-value text-sm text-gray-700">{product?.impactData?.reductionTargetCarbon}%</div>
                            <div className="stat-title  text-sm text-gray-500">Water Recycled</div>
                            <div className="stat-value text-sm text-gray-700">{product?.impactData?.waterRecycled}%</div>
                          </div>
                          <div className="stat">
                            <div className="stat-title text-sm text-gray-700">Carbon Reduction Achievement</div>
                            <div className="stat-value text-sm text-gray-700">{product?.impactData?.reductionAchievementCarbon}%</div>
                            <div className="stat-title  text-sm text-gray-500">Water Reduction Achievement</div>
                            <div className="stat-value text-sm text-gray-700">{product?.impactData?.reductionAchievementWater}%</div>
                          </div>
                        </div>

                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Bio Impact</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="grid grid-cols-2 gap-8">
                          <div>

                            <h3 className="text-base font-semibold leading-7 text-gray-900 mb-3">Bio-Based Content</h3>
                            <div className="radial-progress text-success" style={{ "--value": product?.impactData?.bioBasedContent }} role="progressbar">{product?.impactData?.bioBasedContent}%</div>

                            <h3 className="text-base font-semibold leading-7 text-gray-900"> Waste Reduction</h3>
                            <div className="radial-progress text-success mt-4" style={{ "--value": product?.impactData?.wasteReduction }} role="progressbar">{product?.impactData?.wasteReduction}%</div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Recyclability</h3>
                            <div className="text-gray-500">Mechanical Recyclability</div>
                            <progress className="progress progress-success w-full" value={product?.impactData?.mechanicalRecyclability} max="100">{product?.impactData?.mechanicalRecyclability}%</progress>
                            <div className="text-gray-500 mt-2">Chemical Recyclability</div>
                            <progress className="progress progress-success w-full" value={product?.impactData?.chemicalRecyclability} max="100">{product?.impactData?.chemicalRecyclability}%</progress>
                            <div className="text-gray-500 mt-2">Natural Recyclability</div>
                            <progress className="progress progress-success w-full" value={product?.impactData?.naturalRecyclability} max="100">{product?.impactData?.naturalRecyclability}%</progress>
                          </div>
                        </div>
                      </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Certificates</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="grid grid-cols-4 gap-8">
                          {product?.certificates.map((certificate, index) => (
                            <img key={index} src={getUrlByName(certificate)} className="h-100 w-full" alt="Certificate" />
                          ))}
                        </div>
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                      <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <div className="mt-8">
                          <div className="flex flex-wrap gap-4">
                            {product?.attachments.map((item, index) => (
                              <button key={item.attachmentId} className="btn" onClick={() => window.open(ImageAssetURL + item.attachmentId, '_blank')}>
                                {item.name}
                              </button>

                            ))}
                          </div>
                        </div>

                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductDetail;

