import { useEffect, useState } from 'react';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { v4 as uuidv4 } from 'uuid';

const useUppy = (id: string,fileNo: number) => {
  const [uppy, setUppy] = useState<Uppy | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  useEffect(() => {
    const uppyInstance = new Uppy({
      allowMultipleUploads: true,
      id: `uppy-dashboard-${id}`,
      restrictions: {
        maxNumberOfFiles: fileNo,
        maxFileSize: 100000000,
        allowedFileTypes: ['images/*', '.jpeg', '.jpg',".webp", '.png',".pdf",".txt",".docx"],
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
        };
      }).on('complete', (result) => {
        console.log(result.successful[0])
        setUploadedFiles((prevFiles) => [...prevFiles, result.successful[0].meta.objectName]);

            
        });

           
    setUppy(uppyInstance);

    return () => {
      uppyInstance.close();
    };
  }, [id]);

  return { uppy, uploadedFiles };
};

export default useUppy;