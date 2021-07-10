import React from 'react';
import { useHistory } from 'react-router-dom';
import { BACK_BUTTON_LABEL } from '../constants/constants';

export const About: React.FC = () => {
    
    const history = useHistory();

    const handleClickBackButton = () => history.push('/');

    return (
        <div className="centered-content">
            <p className="center">This is a page about project</p>
            <button
                type="button"
                id="back"
                name="back"
                className="btn-small waves-effect waves-light"
                onClick={handleClickBackButton}
            >
                {BACK_BUTTON_LABEL}
            </button>
        </div>
    )
};