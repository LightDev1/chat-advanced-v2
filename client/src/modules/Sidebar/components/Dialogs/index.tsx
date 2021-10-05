import React, { ChangeEventHandler } from 'react';
import { Empty, Input } from 'antd';

import DialogItem from '../DialogItem';
import { Dialog } from 'modules/Sidebar/containers/Dialogs';

import './Dialogs.scss';

interface DialogsProps {
    items: Array<Dialog>;
    inputValue: string;
    onChangInput: ChangeEventHandler<HTMLInputElement>;
    currentDialogId: string | null;
}

const Dialogs: React.FC<DialogsProps> = ({ items, inputValue, onChangInput, currentDialogId }: DialogsProps) => {
    return (
        <div className="dialogs">
            <div className="dialogs__search">
                <Input.Search
                    className="search__dialogs_input"
                    placeholder="Поиск среди контактов"
                    value={inputValue}
                    onChange={onChangInput}
                />
            </div>
            <div className="dialogs__items">
                {items && items.length ? (
                    items.map(item => (
                        <DialogItem
                            key={item._id}
                            currentDialogId={currentDialogId}
                            online={item.user.isOnline}
                            {...item}

                        />
                    ))
                ) : (
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="Ничего не найдено"
                    />
                )}
            </div>
        </div>
    );
};

export default Dialogs;
