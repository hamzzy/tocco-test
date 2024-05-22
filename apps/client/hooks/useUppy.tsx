import { useEffect, useState } from 'react';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { v4 as uuidv4 } from 'uuid';

const useUppy = (id: string) => {
  const [uppy, setUppy] = useState<Uppy | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  useEffect(() => {
    const uppyInstance = new Uppy({
      allowMultipleUploads: true,
      id: `uppy-dashboard-${id}`,
      restrictions: {
        maxFileSize: 100000000,
        allowedFileTypes: ['images/*', '.jpeg', '.jpg', '.png',".pdf",".txt",".docx"],
      },
    })
      .use(Tus, {
        endpoint: `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/upload/resumable`,
        uploadDataDuringCreation: true,
        removeFingerprintOnSuccess: true,
        allowedMetaFields: ['bucketName','objectName'],
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
        }
      })
      .on('file-added', (file) => {
        file.meta = {
          ...file.meta,
          bucketName: "tocco-aasset",
          objectName: uuidv4(),
          contentType: file.type,
        };
      }).on('complete', (result) => {

        setUploadedFiles((prevFiles) => [...prevFiles, result.successful[0].data.name]);

            
        });

           
    setUppy(uppyInstance);

    return () => {
      uppyInstance.close();
    };
  }, [id]);

  return { uppy, uploadedFiles };
};

export default useUppy;