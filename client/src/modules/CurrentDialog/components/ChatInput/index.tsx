import React from 'react';
import { Button, Input } from 'antd';
import { AudioOutlined, CameraOutlined, PlusOutlined, SmileOutlined } from '@ant-design/icons';
import { UploadField } from '@navjobs/upload'

import './ChatInput.scss';

const ChaInput: React.FC = () => {
    return (
        <div className="chat-input">
            <div className="chat-input__add-file-btn">
                <Button
                    icon={<PlusOutlined style={{ fontSize: 20 }} />}
                    type="link"
                    shape="circle"
                />
            </div>
            <div className="chat-input__textarea-container">
                <Input
                    placeholder="Сообщение"
                />
                <Button
                    type="link"
                    shape="circle"
                    icon={<SmileOutlined style={{ fontSize: 25 }} />}

                />
            </div>
            <div className="chat-input__actions">
                <div className="chat-input-record-btn">
                    <Button
                        type="link"
                        shape="circle"
                        icon={<AudioOutlined style={{ fontSize: 25 }} />}
                    />
                </div>
                <UploadField
                    onFiles={(files: any) => { console.log(files) }}
                    containerProps={{
                        className: 'chat-input__upload-btn'
                    }}
                    uploadProps={{
                        accept: '.jpg,.jpeg,.png,.gif,.bmp,.ogg',
                        multiple: 'multiple'
                    }}
                >
                    <Button type="link" shape="circle" icon={<CameraOutlined style={{ fontSize: 25 }} />} />
                </UploadField>
            </div>
        </div>
    );
};

export default ChaInput;
