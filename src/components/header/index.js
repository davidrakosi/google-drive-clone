import React from 'react'
import '../../styles/Header.css'

import GDriveLogo from '../../media/google-drive-logo.png'

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const index = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GDriveLogo} alt="Google Drive" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <HelpOutlineIcon />
                <SettingsIcon />
                <AccountCircleIcon />
            </div>
        </div>
    )
}

export default index
