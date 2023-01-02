import axios from 'axios'
import React from 'react'
import FileItem from './FileItem'

const FileList = ({files, removeFile}: any) => {
    const deleteFileHandler = ({files, removeFile}:any) => {
        // axios.delete('')
    }

    return (
        <ul>
            {
                files &&
                files.map((f:any) => <FileItem
                    key={f.name}
                    // file={f}
                    // deleteFile={deleteFileHandler}
                />)
            }
        </ul>
    )
}

export default FileList