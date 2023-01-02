import React from 'react'

const FileUpload = ({ files, setFiles }: any) => {
    const uploadHandler = (e:any) => {
        const file = e.target.files[0];
        file.isUploading = true;
        setFiles([...files, file])

        const formData = new FormData();
        formData.append(
            file.name,
            file,
            file.name
        )
    }
    return (
        <>
            <div className=''>
                <div className="flex items-center mt-[30px] justify-start w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col border-[#B1C4F0] items-center justify-center w-[300px] h-[400px] border-[8px] border-dashed rounded-lg cursor-pointer ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[70px] h-[84px] text-[#5885E9]"><path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" /><path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" /></svg>
                            <p className="mb-2 text-[23px] font-Cairo text-[#A7A7A7] mt-[20px]">Drop file tugasmu disini</p>
                            <p className='text-[19px] text-[#A7A7A7] font-Cairo'>atau</p>
                            <p className="text-[#5885E9] mt-[25px] font-bold border-2 border-[#5885E9] rounded-xl px-5 py-3">Pilih File</p>
                        </div>
                        <input onChange={uploadHandler} id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
            </div>
        </>
    )
}

export default FileUpload