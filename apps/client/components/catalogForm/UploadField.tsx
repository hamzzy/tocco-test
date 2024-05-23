import React from 'react';
import UppyDashboard from '@/components/upload';

interface UploadFieldProps {
  label: string;
  name: string;
  formik: any;
}

const UploadField: React.FC<UploadFieldProps> = ({ label, name, formik }) => {
  return (
    <div className="col-span-full">
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-4 flex text-sm leading-6 text-gray-600">
        <UppyDashboard id={`unique-id-${name}`} name={name} setField={formik} />
      </div>
      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-red-500 text-sm">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default UploadField;
