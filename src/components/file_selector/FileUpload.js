import React, {useRef, useState} from 'react';
import IconClose from './close.svg';
import IconCloudUpload from './cloud_upload.svg';
import IconCloudOk from './cloud_ok.svg';
import './file-upload.css';

function renderDropFile(isDragging) {
    if (isDragging) {
        return [
            <div className='file-drop'/>,
            <div>
                drop to upload...
            </div>
        ]
    }
}

const hasFiles = ({dataTransfer}) => dataTransfer.items && dataTransfer.items.length > 0;
const stopEventBubbling = (e) => {
    e.preventDefault()
    e.stopPropagation()
}
const onDragOver = (e) => {
    stopEventBubbling(e);
};

const FileUpload = ({children, dropHandler}) => {
    const fileUpload = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const [eventDepth, setEventDepth] = useState(0);

    const onDragEnter = (e) => {
        stopEventBubbling(e);
        setEventDepth(n => n + 1);
        if (hasFiles(e)) {
            setIsDragging(true)
        }
    };
    const onDragLeave = (e) => {
        stopEventBubbling(e);
        setEventDepth(n => n - 1);
        if (eventDepth > 1) return;
        setIsDragging(false)
    };
    const onDrop = (e) => {
        stopEventBubbling(e);
        setEventDepth(0);
        if (hasFiles(e)) {
            setIsDragging(false);
            const files = e.dataTransfer.files;
            dropHandler(Object.values(files))
        }
    };

    return (
        <div
            className='file-upload'
            ref={fileUpload}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            <div className='vertical-center'>
                <img src={IconCloudUpload} alt="cloud upload"/>
                <div>
                    drag files to upload...
                </div>
            </div>
            {
                children
            }
            {
                renderDropFile(isDragging)
            }
        </div>
    );
};

export default FileUpload;
