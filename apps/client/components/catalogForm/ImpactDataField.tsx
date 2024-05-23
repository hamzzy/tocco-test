import React from 'react';
import InputField from './InputField';
import { useFormikContext } from 'formik';

const ImpactDataFields: React.FC = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Impact Data</h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    

<div className="sm:col-span-3">
  <InputField
    label="Total Carbon Footprint (kg CO2eq)"
    name="impactData.totalCarbonFootprint"
    type="number"
    value={values.impactData.totalCarbonFootprint}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.impactData?.totalCarbonFootprint}
    touched={touched.impactData?.totalCarbonFootprint}
  />
</div>

<div className="sm:col-span-3">
  <InputField
    label="Reduction Target Carbon (kg CO2eq)"
    name="impactData.reductionTargetCarbon"
    type="number"
    value={values.impactData.reductionTargetCarbon}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.impactData?.reductionTargetCarbon}
    touched={touched.impactData?.reductionTargetCarbon}
  />
</div>

<div className="sm:col-span-3">
  <InputField
    label="Total Water Consumption (m³)"
    name="impactData.totalWaterConsumption"
    type="number"
    value={values.impactData.totalWaterConsumption}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.impactData?.totalWaterConsumption}
    touched={touched.impactData?.totalWaterConsumption}
  />
</div>

<div className="sm:col-span-3">
  <InputField
    label="Water Recycled (m³)"
    name="impactData.waterRecycled"
    type="number"
    value={values.impactData.waterRecycled}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.impactData?.waterRecycled}
    touched={touched.impactData?.waterRecycled}
  />
</div>

<div className="sm:col-span-2">
  <InputField
    label="Bio Based Content (%)"
    name="impactData.bioBasedContent"
    type="number"
    value={values.impactData.bioBasedContent}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.impactData?.bioBasedContent}
    touched={touched.impactData?.bioBasedContent}
  />
</div>

<div className="sm:col-span-3">
  <InputField
    label="Water Reduction (%)"
    name="impactData.wasteReduction"
    type="number"
    value={values.impactData.wasteReduction}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.impactData?.wasteReduction}
    touched={touched.impactData?.wasteReduction}
  />
</div>

<div className="sm:col-span-2">
  <InputField
    label="Mechanical Recyclability (%)"
    name="impactData.mechanicalRecyclability"
    type="number"
    value={values.impactData.mechanicalRecyclability}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.impactData?.mechanicalRecyclability}
    touched={touched.impactData?.mechanicalRecyclability}
  />
</div>

<div className="sm:col-span-2">
  <InputField
    label="Chemical Recyclability (%)"
    name="impactData.chemicalRecyclability"
    type="number"
    value={values.impactData.chemicalRecyclability}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.impactData?.chemicalRecyclability}
    touched={touched.impactData?.chemicalRecyclability}
  />
</div>

<div className="sm:col-span-2">
  <InputField
    label="Natural Recyclability (%)"
    name="impactData.naturalRecyclability"
    type="number"
    value={values.impactData.naturalRecyclability}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.impactData?.naturalRecyclability}
    touched={touched.impactData?.naturalRecyclability}
  />
</div>


        
        
      </div>
    </div>
  );
};

export default ImpactDataFields;
