import { useEffect, useState } from 'react';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const useUppy = (id: string, bucketName: string) => {
  const [uppy, setUppy] = useState<Uppy | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  useEffect(() => {
    const uppyInstance = new Uppy({
      allowMultipleUploads: true,
      id: `uppy-dashboard-${id}`,
      restrictions: {
        maxFileSize: 100000000,
        allowedFileTypes: ['images/*', '.jpeg', '.jpg', '.png'],
      },
    })
      .use(Tus, {
        endpoint: `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/upload/resumable`,
        uploadDataDuringCreation: true,
        removeFingerprintOnSuccess: true,
        allowedMetaFields: ['bucketName'],
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        },
        onAfterResponse: async (req, res) => {
          const fileId = res.getHeader('x-uppy-companion-file-id');
          const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/${bucketName}/${fileId}`;
          console.log(fileUrl);
        //   setUploadedFiles((prevFiles) => [...prevFiles, fileUrl]);
        },
      })
      .on('file-added', (file) => {
        file.meta = {
          ...file.meta,
          bucketName: "tocco-aasset",
        };
      });

    setUppy(uppyInstance);

    return () => {
      uppyInstance.close();
    };
  }, [id, bucketName]);

  return { uppy, uploadedFiles };
};

export default useUppy;