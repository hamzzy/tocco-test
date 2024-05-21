import { useEffect, useState } from 'react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

const useUppy = (id: string) => {
  const [uppy, setUppy] = useState<Uppy | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);


  useEffect(() => {
    const uppyInstance = new Uppy({
        allowMultipleUploads: true,
        id:`uppy-dashboard-${id}`, 
        restrictions: {
            maxFileSize: 100000000,
            allowedFileTypes: ["images/*", ".jpeg", ".jpg", ".png"],
          },

          
          onBeforeFileAdded: (currentFile, files) => {
            const lessonTitle = ""
            const fileExt = currentFile.name.split('.').pop();

            var name = '${courseTitle}' + '-' + lessonTitle + '.' + fileExt;
            name = name.trim().replace(/\s/g, '_');

            const modifiedFile = {
              ...currentFile,
              meta: {
                  ...currentFile.meta,
                  name
              },
              name
            };
            return modifiedFile
          }

    });
    // Uncomment and configure the following if you're using XHRUpload
    // uppyInstance.use(XHRUpload, {
    //   endpoint: `${supabaseUrl}/storage/v1/object/upload/bucket-name`,
    //   headers: {
    //     Authorization: `Bearer ${supabaseKey}`,
    //   },
    //   fieldName: 'file',
    //   getResponseData: (responseText) => {
    //     const response = JSON.parse(responseText);
    //     return {
    //       url: response.Key,
    //     };
    //   },
    // });

    uppyInstance.on('complete', (result) => {
    //   const filePaths = result.successful.map(file => file.response.body.url);
      setUploadedFiles("file iddnj");
      console.log('Upload complete! We’ve uploaded these files:');
    });

    setUppy(uppyInstance);

    return () => {
      uppyInstance.close();
    };
  }, []);

  return { uppy, uploadedFiles};
};

export default useUppy;
