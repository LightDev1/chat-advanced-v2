import React from 'react';
import { Spin, Empty } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import Message from '../Message';

import './Messages.scss';

interface MessagesProps {
    items: Array<any>;
    isLoading: boolean
}

const Messages: React.FC<MessagesProps> = ({ items, isLoading }: MessagesProps) => {
    return (
        <div className="chat__dialog-messages">
            <div className={classNames('messages', {
                'messages_loading': isLoading,
                'messages_empty': !items.length,
            })}>
                {isLoading ? (
                    <Spin
                        indicator={<LoadingOutlined />}
                        tip="Загрузка сообщений"
                        size="large"
                    />
                ) : (items.length > 0) ? (
                    items.map(item => (
                        <Message
                            key={item._id}
                            isMe={false}
                            {...item}
                        />
                    ))
                ) : <Empty description="Нет сообщений" />
                }
            </div>
        </div>
    );
};

export default Messages;
