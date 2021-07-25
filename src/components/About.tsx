import React from 'react';
import { useHistory } from 'react-router-dom';
import { BACK_BUTTON_LABEL, TO_MAIN_PAGE } from '../constants/constants';
import { APP_DESCRIPTION } from '../constants/app-description';

export const About: React.FC = () => {
    
    const history = useHistory();

    const handleClickBackButton = () => history.push(TO_MAIN_PAGE);

    return (
        <div className="centered-content">
            <p className="center app-description">{APP_DESCRIPTION}</p>
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
    );
};