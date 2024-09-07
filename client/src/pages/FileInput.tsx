import { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import Upload from '../assets/images/upload.png';
import { MdCancel } from "react-icons/md";
import NoFiles from '../assets/images/nofiles.jpg';

function FileInput() {
    const [files, setFiles] = useState<any[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*,application/pdf', 
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles); 
        },
    });

    const handleRemoveFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1); 
        setFiles(updatedFiles);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = 'http://localhost:5000/predict';
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        files.forEach((file) => {
            const formData = new FormData();
            formData.append('file', file);

            axios.post(url, formData, config)
                .then((response) => {
                    setUploadedFiles((prev) => [...prev, response.data.class]);
                })
                .catch((err) => {
                    console.error(err);
            });
        });
    };

    return (
        <div className="w-[50vw] flex flex-col items-center justify-center pt-10">
            <div className="w-full flex flex-col items-center justify-center">
                <div 
                    className={`drag-drop-box ${files.length > 0 ? 'files-selected' : ''}`}
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    {files.length > 0 ? (
                        <div className="file-preview">
                            <h4 className='text-blue-400 font-semibold font-montserrat'>{files.length} file(s) selected:</h4>
                            <ul>
                                {files.map((file, index) => (
                                    <li key={index} className='font-montserrat flex items-center gap-5 justify-between border border-zinc-600 rounded-lg my-1 px-5'>
                                        {file.name}
                                        <button 
                                            className="remove-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRemoveFile(index);
                                            }}
                                        >
                                            <MdCancel className='h-5 w-5' />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex gap-2 font-montserrat mt-10'>
                                <div className='text-lg font-semibold'>Drag and drop</div>
                                <div className='font-regular text-lg'>or</div>
                                <div className='text-lg font-semibold'>Click to add more files</div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col items-center font-montserrat gap-5'>
                            <img src={Upload} alt="upload_icon" className='h-20 w-20' />
                            <div className='text-2xl font-semibold'>Drag and drop</div>
                            <div className='flex items-center gap-10 font-regular text-lg'><div className='h-[1px] w-20 bg-black'></div>or<div className='h-[1px] w-20 bg-black'></div></div>
                            <div className='text-2xl font-semibold'>Click to Browse</div>
                        </div>
                    )}
                </div>
                <Button className='m-10 px-7 py-5 text-md' onClick={handleSubmit}>View Results</Button>
            </div>
            <div className="w-[50vw] h-screen">
                {uploadedFiles.length 
                    ? (
                        <>
                            <h3>Uploaded Files:</h3>
                            <ul id="result">
                                {uploadedFiles.map((file, index) => (
                                    <li key={index}>
                                        {files[index].name}
                                        {file}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )
                    : (
                        <div className='flex flex-col justify-start items-center h-full w-full'>
                            <div className='font-montserrat text-xl font-bold'>Upload files to view results</div>
                            <img src={NoFiles} className='h-32' />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default FileInput;
