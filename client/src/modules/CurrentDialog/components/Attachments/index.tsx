import React from 'react';

import './Attachments.scss';

export interface AttachmentInterface {
    filename: string;
    url: string;
}

interface AttachmentsProps {
    files: Array<AttachmentInterface>
}


const Attachments: React.FC<AttachmentsProps> = ({ files }: AttachmentsProps) => {
    return (
        <div className="message__attachments">
            {files.map((item, index) => (
                <div key={index} className="message__attachments-item">
                    <img src={item.url} alt={item.filename} />
                </div>
            ))}
        </div>
    );
};

export default Attachments;
