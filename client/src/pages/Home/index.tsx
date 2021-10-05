import React from 'react'
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Sidebar, CurrentDialog } from 'modules';
import actions from 'modules/Sidebar/actions';

import './Home.scss';

interface HomeProps {
    location: any;
}

const Home: React.FC<HomeProps> = ({ location }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const dialogId = location.pathname.split('/').pop();
        dispatch(actions.setCurrentDialogId(dialogId))
        // eslint-disable-next-line
    }, [location.pathname])
    return (
        <div className="chat">
            <Sidebar />
            <CurrentDialog />
        </div>
    );
};

export default withRouter(Home);
