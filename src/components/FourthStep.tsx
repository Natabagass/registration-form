import React, { useContext } from 'react'
import { multiStepContext } from '../pages/StepContext'

export default function FourthStep() {
    const {setStep, userData, setUserData} = useContext(multiStepContext)
    return (
        <div className='flex flex-row'>
            <button type='submit' onClick={()=>setStep(3)} className='mr-10 ml-auto block font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-[#5885E9] p-3 font-bold'>Kembali</button>
            <button type='submit' onClick={()=>setStep(5)} className='mr-0  block bg-[#5885E9] font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-white p-3 font-bold shadow-effect'>Berikutnya</button>
        </div>
    )
}