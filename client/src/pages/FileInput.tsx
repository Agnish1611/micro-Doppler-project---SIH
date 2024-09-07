import { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import Upload from '../assets/images/upload.png';
import { MdCancel } from "react-icons/md";
import NoFiles from '../assets/images/nofiles.jpg';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ObjectData{
    lat?: number,
    long?: number,
    vel?: number
}

function FileInput() {
    const [files, setFiles] = useState<any[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
    const [fileParams, setFileParams] = useState<Record<number, ObjectData>>({});
 
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

    const handleParameterChange = (index: number, field: keyof ObjectData, value: number) => {
        setFileParams((prev) => ({
          ...prev,
          [index]: {
            ...prev[index],
            [field]: value,
          },
        }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = 'http://localhost:5000/predict';
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        files.forEach((file, index) => {
            const formData = new FormData();
            formData.append('file', file);

            axios.post(url, formData, config)
                .then((response) => {
                    setUploadedFiles((prev) => [
                        ...prev,
                        { class: response.data.class, params: fileParams[index] },
                    ]);
                })
                .catch((err) => {
                    console.error(err);
            });
        });
    };

    return (
        <div className="w-[50vw] flex flex-col items-center justify-center pt-10">
            {files.length ? (<h4 className='text-blue-400 font-semibold font-montserrat'>{files.length} file(s) selected:</h4>) : ''}
            <div className="w-full flex flex-col items-center justify-center">
                <div 
                    className={`drag-drop-box ${files.length > 0 ? 'files-selected' : ''} overflow-y-scroll`}
                    {...getRootProps()}
                >
                    <input {...getInputProps()} onChange={() => console.log('inputed')} />
                    {files.length > 0 ? (
                        <div className="file-preview">
                            <ul>
                                {files.map((file, index) => (
                                    <li key={index} className='font-montserrat flex items-center gap-5 justify-between border border-zinc-600 rounded-lg my-1 px-5'>
                                        {file.name}
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button className='text-xs px-2 my-1' onClick={(event) => event.stopPropagation()}>Parameters</Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-fit z-20" onClick={(event) => event.stopPropagation()}>
                                                    <div className="grid gap-4">
                                                    <div className="space-y-2">
                                                        <h4 className="font-medium leading-none">Parameters</h4>
                                                        <p className="text-sm text-muted-foreground">
                                                        Set the parameters for the object.
                                                        </p>
                                                    </div>
                                                    <div className="grid gap-2">
                                                        <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="width">Latitude</Label>
                                                        <Input
                                                            type='number'
                                                            id="width"
                                                            defaultValue="41.40338"
                                                            className="col-span-2 h-8"
                                                            onChange={(e) => handleParameterChange(index, 'lat', parseFloat(e.target.value))}
                                                        />
                                                        </div>
                                                        <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="maxWidth">Longitude</Label>
                                                        <Input
                                                            type='number'
                                                            id="maxWidth"
                                                            defaultValue="2.17403"
                                                            className="col-span-2 h-8"
                                                            onChange={(e) => handleParameterChange(index, 'long', parseFloat(e.target.value))}
                                                        />
                                                        </div>
                                                        <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="height">Velocity</Label>
                                                        <Input
                                                            type='number'
                                                            id="height"
                                                            defaultValue="25"
                                                            className="col-span-2 h-8"
                                                            onChange={(e) => handleParameterChange(index, 'vel', parseFloat(e.target.value))}
                                                        />
                                                        </div>
                                                    </div>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                            {/* <MdCancel className='h-5 w-5' /> */}
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
            <div className="w-[50vw] h-fit">
                {uploadedFiles.length 
                    ? (
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='font-montserrat text-lg font-bold'>Objects Detected:</h3>
                            <ul id="result">
                                {uploadedFiles.map((file, index) => (
                                    <li key={index}>
                                        <div>
                                        <strong>Class:</strong> {file.class}
                                        </div>
                                        <div>
                                        <strong>Latitude:</strong> {file.params?.lat}
                                        </div>
                                        <div>
                                        <strong>Longitude:</strong> {file.params?.long}
                                        </div>
                                        <div>
                                        <strong>Velocity:</strong> {file.params?.vel}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
