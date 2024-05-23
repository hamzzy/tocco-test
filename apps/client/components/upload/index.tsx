import useUppy from '@/hooks/useUppy';
import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { FormikProps } from 'formik';
interface UppyDashboardProps {
  id: string;
  name: string;
  setField: FormikProps<any>['setFieldValue'];
  fileNo: number;
}

const UppyDashboard: React.FC<UppyDashboardProps> = ({ id, name,fileNo,setField }) => {

  const { uppy, uploadedFiles } = useUppy(id,fileNo); // Call the useUppy hook with the provided ID
  useEffect(() => {
    if (uploadedFiles.length > 0) {
      const fieldData = uploadedFiles.map((filePath) =>
        name === "attachments"
          ? { name: filePath, attachmentId: filePath }
          : filePath
      );
      setField.setFieldValue(name, fieldData, true);
    }
  }, [uploadedFiles, name]);
  return (
    <>
      {uppy && <Dashboard uppy={uppy} id={`uppy-dashboard-${id}`}  height={200} />}
    </>
  );
};

export default UppyDashboard;
