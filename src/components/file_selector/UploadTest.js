import React, {useState} from 'react';
import FileUpload from "./FileUpload";

const UploadTest = () => {
    const [droppedFiles, setDroppedFiles] = useState([]);

    const handleDrop = (files) => {
        setDroppedFiles(files.reduce((acc, file) => {
            if (file.name) {
                acc.push(file.name)
            }

            return acc
        }, droppedFiles.slice()))
    }

    return (
        <div>
            <FileUpload
                dropHandler={handleDrop}
            >
                {
                    droppedFiles.map((file, i) => <div key={i}>{file}</div>)
                }
            </FileUpload>
        </div>
    );
};

export default UploadTest;
