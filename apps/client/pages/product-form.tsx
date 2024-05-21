import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import useUppy from "@/hooks/useUppy";
import UppyDashboard from "@/components/upload";



// TotalCarbonFootprint tracked, 
// ReductionTargetCarbon tracked, 
// ReductionAchievementCarbon compute, 
// BioBased Content tracked, 
// WasteReduction t, 
// TotalWaterConsumption t, 
// WaterRecycled t, 
// ReductionAchievementWater computed, 
// MechanicalRecyclability, 
// ChemicalRecyclability, 
// NaturalRecyclability
interface ImpactData {
    totalCarbonFootprint: number;
    reductionTargetCarbon: number;
    waterConsumption: number;
    waterRecycled: number;
    bioBasedContent: number;
    wastedReduction: number;
    mechanicalRecyclability: number;
    chemicalRecyclability: number;
    naturalRecyclability: number;
  }
  
  interface Certificate {
    filePath: string;
  }
  
  interface Attachment {
    name: string;
    filePath: string;
  }
  
  interface FormValues {
    title: string;
    description: string;
    impactData: ImpactData[];
    certificates: Certificate[];
    attachments: Attachment[];
  }
  
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    impactData: Yup.array().of(
      Yup.object({
        totalCarbonFootprint: Yup.number().required('Required'),
        reductionTargetCarbon: Yup.number().required('Required'),
        waterConsumption: Yup.number().required('Required'),
        waterRecycled: Yup.number().required('Required'),
        bioBasedContent: Yup.number().required('Required'),
        wastedReduction: Yup.number().required('Required'),
        mechanicalRecyclability: Yup.number().required('Required'),
        chemicalRecyclability: Yup.number().required('Required'),
        naturalRecyclability: Yup.number().required('Required'),
      })
    ),
    // certificates: Yup.array().of(
    //   Yup.object({
    //     name: Yup.string().required('Required'),
    //     filePath: Yup.string().required('Required'),
    //   })
    // ),
    // attachments: Yup.array().of(
    //   Yup.object({
    //     name: Yup.string().required('Required'),
    //     filePath: Yup.string().required('Required'),
    //   })
    // )
  });
  
  const initialValues: FormValues = {
    title: '',
    description: '',
    impactData: [
      {
        totalCarbonFootprint: 0,
        reductionTargetCarbon: 0,
        waterConsumption: 0,
        waterRecycled: 0,
        bioBasedContent: 0,
        wastedReduction: 0,
        mechanicalRecyclability: 0,
        chemicalRecyclability: 0,
        naturalRecyclability: 0,
      },
    ],
    certificates: [{ name: '', filePath: '' }],
    attachments: [{ name: '', filePath: '' }],
  };
const CatalogForm: React.FC = () => {

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: function (values){
      console.log(values);
    },
  });


//   useEffect(() => {
//     if (uploadedFiles.length > 0) {
//       formik.setFieldValue('attachments', uploadedFiles.map(filePath => ({ name: filePath, filePath })));
//     }
//   }, [uploadedFiles, formik]);

  return (
    <div className="flex justify-center items-center  bg-gray-100">
    <form onSubmit={formik.handleSubmit} className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Product Form</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                {formik.touched.title && formik.errors.title ? (
                  <div className="text-red-500 text-sm">{formik.errors.title}</div>
                ) : null}
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-red-500 text-sm">{formik.errors.description}</div>
                ) : null}
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Product Photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Impact Data</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          {formik.values.impactData.map((_, index) => (
            <div key={index} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor={`impactData.${index}.totalCarbonFootprint`} className="block text-sm font-medium leading-6 text-gray-900">
                  Total Carbon Footprint (kg CO2eq)
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name={`impactData.${index}.totalCarbonFootprint`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.impactData[index].totalCarbonFootprint}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.impactData?.[index]?.totalCarbonFootprint && formik.errors.impactData?.[index]?.totalCarbonFootprint ? (
                    <div className="text-red-500 text-sm">{formik.errors.impactData[index].totalCarbonFootprint}</div>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor={`impactData.${index}.reductionTargetCarbon`} className="block text-sm font-medium leading-6 text-gray-900">
                  Reduction Target Carbon (kg CO2eq)
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name={`impactData.${index}.reductionTargetCarbon`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.impactData[index].reductionTargetCarbon}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.impactData?.[index]?.reductionTargetCarbon && formik.errors.impactData?.[index]?.reductionTargetCarbon ? (
                    <div className="text-red-500 text-sm">{formik.errors.impactData[index].reductionTargetCarbon}</div>
                  ) : null}
                </div>
              </div>

            <div className="sm:col-span-3">
              <label htmlFor="achievement" className="block text-sm font-medium leading-6 text-gray-900">
              Total Water Consumption (m³)
              </label>
              <div className="mt-2">
                <input
                   type="number"
                   name={`impactData.${index}.waterConsumption`}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.impactData[index].waterConsumption}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.impactData?.[index]?.waterConsumption && formik.errors.impactData?.[index]?.waterConsumption ? (
                    <div className="text-red-500 text-sm">{formik.errors.impactData[index].waterConsumption}</div>
                  ) : null}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Water Recycled (m³)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name={`impactData.${index}.waterRecycled`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.impactData[index].waterRecycled}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.impactData?.[index]?.waterRecycled && formik.errors.impactData?.[index]?.waterRecycled ? (
                    <div className="text-red-500 text-sm">{formik.errors.impactData[index].waterRecycled}</div>
                  ) : null}
              </div>
            </div>

            

            <div className="sm:col-span-2 ">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Bio Based Content (%)
              
              </label>
              <div className="mt-2">
                <input
                 type="number"
                 name={`impactData.${index}.bioBasedContent`}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.impactData[index].bioBasedContent}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                  {formik.touched.impactData?.[index]?.bioBasedContent && formik.errors.impactData?.[index]?.bioBasedContent ? (
                    <div className="text-red-500 text-sm">{formik.errors.impactData[index].bioBasedContent}</div>
                  ) : null}
              </div>
            </div>
            <div className="sm:col-span-3 ">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Water Reduction (%)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name={`impactData.${index}.wastedReduction`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.impactData[index].wastedReduction}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
                   {formik.touched.impactData?.[index]?.wastedReduction && formik.errors.impactData?.[index]?.wastedReduction ? (
                     <div className="text-red-500 text-sm">{formik.errors.impactData[index].wastedReduction}</div>
                   ) : null}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Mechanical Recyclability (%)
              </label>
              <div className="mt-2">
                <input
                 type="number"
                 name={`impactData.${index}.mechanicalRecyclability`}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.impactData[index].mechanicalRecyclability}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                  {formik.touched.impactData?.[index]?.mechanicalRecyclability && formik.errors.impactData?.[index]?.mechanicalRecyclability ? (
                    <div className="text-red-500 text-sm">{formik.errors.impactData[index].mechanicalRecyclability}</div>
                  ) : null}
              </div>
            </div>
            <div className="sm:col-span-2 ">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Chemical Recyclability (%)
              </label>
              <div className="mt-2">
                <input
                 type="number"
                 name={`impactData.${index}.chemicalRecyclability`}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.impactData[index].chemicalRecyclability}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                  {formik.touched.impactData?.[index]?.chemicalRecyclability && formik.errors.impactData?.[index]?.chemicalRecyclability ? (
                    <div className="text-red-500 text-sm">{formik.errors.impactData[index].chemicalRecyclability}</div>
                  ) : null}
              </div>
              
            </div>
            <div className="sm:col-span-2 ">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Natural Recyclability (%)
              </label>
              <div className="mt-2">
                <input
                    type="number"
                    name={`impactData.${index}.naturalRecyclability`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.impactData[index].naturalRecyclability}
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   />
                     {formik.touched.impactData?.[index]?.naturalRecyclability && formik.errors.impactData?.[index]?.naturalRecyclability ? (
                       <div className="text-red-500 text-sm">{formik.errors.impactData[index].naturalRecyclability}</div>
                     ) : null}
                 </div>
              
            </div>

          </div>
                    ))}
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Certificate</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Add the neccessary certificate  of your product
          </p>

          <div className="mt-10 space-y-10">
          <div className="col-span-full">
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
                  <div className="text-center">
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <div>
                      <UppyDashboard id="unique-id-1" name="certificate" setFileField={formik.setFieldValue}/>
                    </div>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Attachments</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            you can uplaod your impact report, technical report here.
          </p>

          <div className="mt-3 space-y">
          <div className="col-span-full">
              <div className="">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    
                  <UppyDashboard id="unique-id-2" name="attachment"setFileField={formik.setFieldValue}/>
                 
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
  );
};

export default CatalogForm;