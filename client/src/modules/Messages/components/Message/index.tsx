import React from 'react';
import classNames from 'classnames';

import { Avatar } from 'components';
import MessageAudio from '../MessageAudio';
import Attachments, { AttachmentInterface } from 'modules/CurrentDialog/components/Attachments';

import { User } from 'modules/Sidebar/components/DialogItem';

import './Message.scss';
import { getMessageTime } from 'utils/helpers';

interface MessageProps {
    text?: string;
    isMe: boolean;
    createdAt: string;
    user: User;
    attachments?: Array<AttachmentInterface>;
    audio?: string;
}

const Message: React.FC<MessageProps> = ({ isMe, attachments, audio, text, createdAt, user }: MessageProps) => {
    return (
        <div className={classNames('message', {
            'message_is-me': isMe,
            'message_is-audio': audio,
        })}>
            <div className="message__content">
                {!isMe ? (<>
                    <div className="message__data">
                        <Avatar image={user.avatar} size="small" />
                        <div className="message__time">
                            <p>{getMessageTime(createdAt)}</p>
                        </div>
                    </div>
                    <div className="message__info">
                        <div className="message__author">
                            <h3 className="message__author__fullname">
                                {user.fullname}
                            </h3>
                        </div>
                        {!audio && (<div className="message__bubble">
                            {text && <p className="message__text">{text}</p>}
                        </div>)}
                        {attachments && (
                            <Attachments files={attachments} />
                        )}
                        {audio && (
                            <MessageAudio audioSrc={audio} />
                        )}
                    </div>
                </>) : (
                    <>
                        <div className="message__info">
                            {!audio && (<div className="message__bubble">
                                {text && <p className="message__text">{text}</p>}
                            </div>)}
                            {attachments && (
                                <Attachments files={attachments} />
                            )}
                            {audio && (
                                <MessageAudio audioSrc={audio} />
                            )}
                        </div>
                        <div className="message__data">
                            <div className="message__time">
                                <p>13:56</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Message;
