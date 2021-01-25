import React from 'react'

import GDriveLogo from '../../media/google-drive-logo.png'

const index = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GDriveLogo} alt="Google Drive"/>
            </div>
           
        </div>
    )
}

export default index
