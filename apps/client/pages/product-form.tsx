// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
// import React, { useEffect, useState } from 'react';
// import { ErrorMessage, useFormik} from 'formik';
// import * as Yup from 'yup';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import useUppy from "@/hooks/useUppy";
// import UppyDashboard from "@/components/upload";
// import { toast } from 'react-hot-toast';
// import { FormValues } from "@/utils/type";
// import { availableCertificates, submitForm } from "@/utils/api";
// import Select from 'react-tailwindcss-select' ;
// import 'react-tailwindcss-select/dist/index.css'

//   const validationSchema = Yup.object({
//     title: Yup.string().required('Required'),
//     description: Yup.string().required('Required'),
//     impactData:Yup.object({
//         totalCarbonFootprint: Yup.number().required('Required'),
//         reductionTargetCarbon: Yup.number().required('Required'),
//         totalWaterConsumption : Yup.number().required('Required'),
//         waterRecycled: Yup.number().required('Required'),
//         bioBasedContent: Yup.number().required('Required'),
//         wasteReduction: Yup.number().required('Required'),
//         mechanicalRecyclability: Yup.number().required('Required'),
//         chemicalRecyclability: Yup.number().required('Required'),
//         naturalRecyclability: Yup.number().required('Required'),
//       })
//     ,
//     certificates: Yup.array().min(1, 'At least one certificate is required').required('Required'),
//   });

//   const initialValues: FormValues = {
//     title: '',
//     description: '',
//     impactData: {
//       totalCarbonFootprint: 0,
//       reductionTargetCarbon: 0,
//       bioBasedContent: 0,
//       wasteReduction: 0,
//       waterRecycled: 0,
//       mechanicalRecyclability: 0,
//       chemicalRecyclability: 0,
//       naturalRecyclability: 0,
//       totalWaterConsumption: 0,
//     },
//     certificates: [],
//     image: "",
//     attachments: []
//   };
// const CatalogForm: React.FC = () => {
//   const queryClient = useQueryClient();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const mutation = useMutation<unknown, Error, FormValues>({mutationFn: submitForm,
//     onSuccess: () => {
//       toast.success('Form submitted successfully!');
//       queryClient.invalidateQueries('catalog');
//       window.location.reload(); // Refresh the page after successful form submission
//     },
//     onError: (error) => {
//       console.log(error.message);
//       toast.error(error.message);
//     },
//   });

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: function (values){
//       const Values = {
//         ...values,
//         image: values.image[0], // Example: Encode the image URL
//         certificates: values.certificates.map((cert) => cert.value), // Example: Trim each certificate string
//       };
//       mutation.mutate(Values);
//       console.log(Values);
//     },
//   });




//   return (
//     <div className="flex justify-center items-center">

//     <form onSubmit={formik.handleSubmit} className="space-y-12">
//     <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Product Form</h2>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-4">
//               <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
//                 Title
//               </label>
//               <div className="mt-2">
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <input
//                     type="text"
//                     name="title"
//                     id="title"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.title}
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//                 {formik.touched.title && formik.errors.title ? (
//                   <div className="text-red-500 text-sm">{formik.errors.title}</div>
//                 ) : null}
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
//                 Description
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="description"
//                   name="description"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.description}
//                   rows={3}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//                 {formik.touched.description && formik.errors.description ? (
//                   <div className="text-red-500 text-sm">{formik.errors.description}</div>
//                 ) : null}
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Product Photo
//               </label>
//                 <div className="text-center">
//                   <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                   <UppyDashboard id="unique-id-1" name="image" setField={formik}/>
//                   </div>
//                   <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//                 {formik.touched.image && formik.errors.image ? (
//                   <div className="text-red-500 text-sm">{formik.errors.image}</div>
//                 ) : null}
//               </div>
//           </div>
//         </div>


//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Impact Data</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>


//             <div  className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//               <div className="sm:col-span-3">
//                 <label htmlFor={`impactData.totalCarbonFootprint`} className="block text-sm font-medium leading-6 text-gray-900">
//                   Total Carbon Footprint (kg CO2eq)
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="number"
//                     name="impactData.totalCarbonFootprint"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.impactData.totalCarbonFootprint}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                   {formik.touched.impactData?.totalCarbonFootprint && formik.errors.impactData?.totalCarbonFootprint ? (
//                     <div className="text-red-500 text-sm">{formik.errors.impactData.totalCarbonFootprint}</div>
//                   ) : null}
//                 </div>
//               </div>

//               <div className="sm:col-span-3">
//                 <label htmlFor={`impactData.reductionTargetCarbon`} className="block text-sm font-medium leading-6 text-gray-900">
//                   Reduction Target Carbon (kg CO2eq)
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="number"
//                    name="impactData.reductionTargetCarbon"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.impactData.reductionTargetCarbon}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                   {formik.touched.impactData?.reductionTargetCarbon && formik.errors.impactData?.reductionTargetCarbon ? (
//                     <div className="text-red-500 text-sm">{formik.errors.impactData.reductionTargetCarbon}</div>
//                   ) : null}
//                 </div>
//               </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="totalWaterConsumption" className="block text-sm font-medium leading-6 text-gray-900">
//               Total Water Consumption (m³)
//               </label>
//               <div className="mt-2">
//                 <input
//                    type="number"
//                   name="impactData.totalWaterConsumption"
//                    onChange={formik.handleChange}
//                    onBlur={formik.handleBlur}
//                    value={formik.values.impactData.totalWaterConsumption}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//                 {formik.touched.impactData?.totalWaterConsumption  && formik.errors.impactData?.totalWaterConsumption  ? (
//                     <div className="text-red-500 text-sm">{formik.errors.impactData.totalWaterConsumption }</div>
//                   ) : null}
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//               Water Recycled (m³)
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="number"
//                  name="impactData.waterRecycled"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.impactData.waterRecycled}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//                 {formik.touched.impactData?.waterRecycled && formik.errors.impactData?.waterRecycled ? (
//                     <div className="text-red-500 text-sm">{formik.errors.impactData.waterRecycled}</div>
//                   ) : null}
//               </div>
//             </div>



//             <div className="sm:col-span-2 ">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//               Bio Based Content (%)

//               </label>
//               <div className="mt-2">
//                 <input
//                  type="number"
//                 name="impactData.bioBasedContent"
//                  onChange={formik.handleChange}
//                  onBlur={formik.handleBlur}
//                  value={formik.values.impactData.bioBasedContent}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//                   {formik.touched.impactData?.bioBasedContent && formik.errors.impactData?.bioBasedContent ? (
//                     <div className="text-red-500 text-sm">{formik.errors.impactData.bioBasedContent}</div>
//                   ) : null}
//               </div>
//             </div>
//             <div className="sm:col-span-3 ">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//               Water Reduction (%)
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="number"
//                  name="impactData.wasteReduction"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.impactData.wasteReduction}
//                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                  />
//                    {formik.touched.impactData?.wasteReduction && formik.errors.impactData?.wasteReduction ? (
//                      <div className="text-red-500 text-sm">{formik.errors.impactData.wasteReduction}</div>
//                    ) : null}
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//               Mechanical Recyclability (%)
//               </label>
//               <div className="mt-2">
//                 <input
//                  type="number"
//                 name="impactData.mechanicalRecyclability"
//                  onChange={formik.handleChange}
//                  onBlur={formik.handleBlur}
//                  value={formik.values.impactData.mechanicalRecyclability}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//                   {formik.touched.impactData?.mechanicalRecyclability && formik.errors.impactData?.mechanicalRecyclability ? (
//                     <div className="text-red-500 text-sm">{formik.errors.impactData.mechanicalRecyclability}</div>
//                   ) : null}
//               </div>
//             </div>
//             <div className="sm:col-span-2 ">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//               Chemical Recyclability (%)
//               </label>
//               <div className="mt-2">
//                 <input
//                  type="number"
//                 name="impactData.chemicalRecyclability"
//                  onChange={formik.handleChange}
//                  onBlur={formik.handleBlur}
//                  value={formik.values.impactData.chemicalRecyclability}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//                   {formik.touched.impactData?.chemicalRecyclability && formik.errors.impactData?.chemicalRecyclability ? (
//                     <div className="text-red-500 text-sm">{formik.errors.impactData.chemicalRecyclability}</div>
//                   ) : null}
//               </div>

//             </div>
//             <div className="sm:col-span-2 ">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//               Natural Recyclability (%)
//               </label>
//               <div className="mt-2">
//                 <input
//                     type="number"
//                    name="impactData.naturalRecyclability"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.impactData.naturalRecyclability}
//                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                    />
//                      {formik.touched.impactData?.naturalRecyclability && formik.errors.impactData?.naturalRecyclability ? (
//                        <div className="text-red-500 text-sm">{formik.errors.impactData.naturalRecyclability}</div>
//                      ) : null}
//                  </div>

//             </div>

//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Certificate</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             Select the certificate below
//           </p>

//           <div className="mt-5 space-y-10">
//           <div className="">

//           <Select
//                     name="certificates"
//                     value={formik.values.certificates}
//                     onChange={selectedOptions => formik.setFieldValue('certificates', selectedOptions)}
//                     options={availableCertificates}
//                     isMultiple={true}

//                   />
//                   {formik.touched.certificates && formik.errors.certificates ? (
//                   <div className="text-red-500 text-sm">{formik.errors.certificates}</div>
//                 ) : null}


//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Attachments</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             you can uplaod your impact report, technical report here.
//           </p>

//           <div className="mt-3 space-y">
//           <div className="col-span-full">
//               <div className="">
//                 <div className="text-center">
//                   <div className="mt-4 flex text-sm leading-6 text-gray-600">

//                   <UppyDashboard id="unique-id-2" name="attachments" setField={formik}/>

//                   </div>
//                   <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//       </div>

//       <div className="mt-6 mb-5 flex items-center justify-end gap-x-6">

//       </div>
//     </form>
//     </div>
//   );
// };

// export default CatalogForm;




import React, { useEffect, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { submitForm } from '@/utils/api';
import { FormValues } from '@/utils/type';
import InputField from '@/components/catalogForm/InputField';
import TextAreaField from '@/components/catalogForm/TextAreaField';
import ImpactDataFields from '@/components/catalogForm/ImpactDataField';
import SelectField from '@/components/catalogForm/selectField';
import { availableCertificates } from '@/utils';
import UppyDashboard from '@/components/upload';


const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  impactData: Yup.object({
    totalCarbonFootprint: Yup.number().required('Required'),
    reductionTargetCarbon: Yup.number().required('Required'),
    totalWaterConsumption: Yup.number().required('Required'),
    waterRecycled: Yup.number().required('Required'),
    bioBasedContent: Yup.number().required('Required'),
    wasteReduction: Yup.number().required('Required'),
    mechanicalRecyclability: Yup.number().required('Required'),
    chemicalRecyclability: Yup.number().required('Required'),
    naturalRecyclability: Yup.number().required('Required'),
  }),
  certificates: Yup.array().min(1, 'At least one certificate is required').required('Required'),
});

const initialValues: FormValues = {
  title: '',
  description: '',
  impactData: {
    totalCarbonFootprint: 0,
    reductionTargetCarbon: 0,
    bioBasedContent: 0,
    wasteReduction: 0,
    waterRecycled: 0,
    mechanicalRecyclability: 0,
    chemicalRecyclability: 0,
    naturalRecyclability: 0,
    totalWaterConsumption: 0,
  },
  certificates: [],
  image: "",
  attachments: []
};

const CatalogForm: React.FC = () => {
  const queryClient = useQueryClient();
  const [formError, setFormError] = useState<string | null>(null); // State for form error
  const mutation = useMutation<unknown, Error, FormValues>({
    mutationFn: submitForm,
    onSuccess: () => {
      toast.success('Form submitted successfully!');
      queryClient.invalidateQueries('catalog');
      formik.resetForm(); // Reset the form after successful submission
    },
    onError: (error) => {
      console.log(error.message);
      setFormError(error.message); // Set the form error
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const Values = {
        ...values,
        image: values.image[0],
        certificates: values.certificates.map((cert) => cert.value),
      };
      mutation.mutate(Values);
    },
  });

  useEffect(() => {
    setFormError(null);
  }, [formik.isSubmitting]);

  return (
    <div className="p-4">
      <FormikProvider value={formik}>
        <div className="flex justify-center items-center">
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                {formError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                    <span className="block sm:inline">{formError}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        onClick={() => setFormError(null)}
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                )}
                <h2 className="text-base font-semibold leading-7 text-gray-900">Enter Product Information</h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                  <div className="sm:col-span-4">
                    <InputField
                      label="Title"
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.title}
                      touched={formik.touched.title}
                    />
                  </div>
                  <div className="col-span-full">
                    <TextAreaField
                      label="Description"
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.description}
                      touched={formik.touched.description}
                    />
                  </div>
                  <div className="col-span-full">
                    <UppyDashboard id="unique-id-1" name="image" fileNo={1} setField={formik} />                </div>
                </div>
              </div>
              <ImpactDataFields />
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Certification</h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <SelectField
                        name="certificates"
                        value={formik.values.certificates}
                        onChange={(selectedOptions: any) => formik.setFieldValue('certificates', selectedOptions)}
                        options={availableCertificates}
                        error={formik.errors.certificates}
                        touched={formik.touched.certificates}
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <UppyDashboard id="unique-id-2" name="attachments" fileNo={2} setField={formik} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className={`rounded-md bg-indigo-600 px-20 py-5 w-50 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-6 ${formik.isSubmitting && !formik.errors ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                style={{ background: "indigo" }}
                disabled={formik.isSubmitting && !formik.errors}
              >
                {formik.isSubmitting && !formik.errors ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="ml-2">Submitting...</span>
                  </div>
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </form>
        </div>
      </FormikProvider>
    </div>
  );
};

export default CatalogForm;


