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
import { availableCertificates, validationSchema } from '@/utils';
import UppyDashboard from '@/components/upload';



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
  const [formError, setFormError] = useState<string | null>(null); 
  const [attachmentType, setAttachmentType] = useState<string | null>(null);
  const mutation = useMutation<unknown, Error, FormValues>({
    mutationFn: submitForm,
    onSuccess: () => {
      toast.success('Form submitted successfully!');
      queryClient.invalidateQueries('catalog');
      formik.resetForm(); 
      window.location.reload()
    },
    onError: (error) => {
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
                    {formError.split(",").map((error, index) => (
                      <span key={index} className="block sm:inline">{error}</span>

                    ))}
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
                    <UppyDashboard id="unique-id-1" name="image" fileNo={1} attachmentType={null} setField={formik} />                </div>
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
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Attachments</h2>
                    <div className="sm:col-span-3">
                      <label htmlFor="attachmentType" className="block text-sm font-medium leading-6 text-gray-900">
                        Attachment Type
                      </label>
                      <div className="mt-2 mb-5">
                        <select
                          id="attachmentType"
                          name="attachmentType"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          value={attachmentType}
                          onChange={(e) => setAttachmentType(e.target.value)}
                        >
                          <option value="">Select an attachment type</option>
                          <option value="Impact Report">Impact Report</option>
                          <option value="Technical Spec">Technical Spec</option>
                          <option value="Green report">Green report</option>
                        </select>
                      </div>
                    </div>
                  <UppyDashboard id="unique-id-2" name="attachments" fileNo={1} attachmentType={attachmentType} setField={formik} />
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
      </FormikProvider >
    </div>
  );
};

export default CatalogForm;


