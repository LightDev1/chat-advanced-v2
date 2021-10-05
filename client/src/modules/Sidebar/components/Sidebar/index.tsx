import React from 'react';
import { Button } from 'antd';
import { BellOutlined, PlusCircleOutlined } from '@ant-design/icons';

import { Avatar } from 'components';
import Dialogs from 'modules/Sidebar/containers/Dialogs';

import profilePic from 'assets/img/profile-image.jpg';

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__header__profil-info">
                    <Avatar image={profilePic} online={true} />
                    <div className="sidebar__header__profil-info-fullname">
                        <h2>Last Light</h2>
                    </div>
                </div>
                <div className="sidebar__header-notifications">
                    <Button
                        icon={<BellOutlined style={{ fontSize: 30, color: '#1D3534' }} />}
                        style={{ marginRight: 5 }}
                    />
                    <Button
                        icon={<PlusCircleOutlined style={{ fontSize: 30, color: '#1D3534' }} />}
                    />
                </div>
            </div>
            <div className="sidebar__dialogs">
                <Dialogs />
            </div>
        </div>
    );
};

export default Sidebar;
