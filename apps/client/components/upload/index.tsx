import useUppy from '@/hooks/useUppy';
import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import React from 'react';
import { SelectField } from '@chakra-ui/react';

const UppyDashboard: React.FC<{ id: string, name: string, setFileField: (field: string, value: any, shouldValidate?: boolean) => void }> = ({ id }) => {
  const { uppy, uploadedFiles } = useUppy(id); // Call the useUppy hook with the provided ID
  // useEffect(() => {
  //       if (uploadedFiles.length > 0) {
  //        setFileField('attachments', uploadedFiles);
  //       }
  //     }, [uploadedFiles, setFileField]);
  return (
    <>
      {uppy && <Dashboard uppy={uppy} id={`uppy-dashboard-${id}`} height={200} />}
    </>
  );
};

export default UppyDashboard;
