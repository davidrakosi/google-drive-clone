import React from 'react'
import '../../styles/NewFile.css'

import PlusIcon from '../../media/new-file-plus.xml'
import AddIcon from '@material-ui/icons/Add';

const NewFile = () => {
    return (
        <div className='newFile'>
            <div className="newFile__container">
                <AddIcon fontSize='large' />
                <p>New</p>
            </div>
        </div>
    )
}

export default NewFile
