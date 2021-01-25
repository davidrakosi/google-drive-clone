import React from 'react'

import GDriveLogo from '../../media/google-drive-logo.png'

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const index = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GDriveLogo} alt="Google Drive" />
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default index
