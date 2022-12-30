import React, { useContext } from 'react'
import { multiStepContext } from '../pages/StepContext'
import { rating } from "../dummy-data";
import Image from 'next/image'
import HeroIcons from '../assets/img/Form 5.png'
import { FaPen } from 'react-icons/fa';

export default function FifthStep() {
    const {setStep, userData, setUserData} = useContext(multiStepContext)
    return (
        <>
            <div className='flex flex-col items-center mt-[50px]'>
                <Image src={HeroIcons} alt={'Hero'} className="xl:w-[480px] lg:w-[440px] w-[225px]"/>
                <h1 className='font-Cairo mt-[30px] font-bold lg:text-[23px] text-[18px]'>Yeay! Pendaftaran telah berhasil dilakukan</h1>
                <h3 className='xl:w-[700px] lg:w-[700px] lg:text-[16px] my-[20px] text-[14px] text-center font-Cairo text-[#727272]'>Kami akan memberikan link Google Meet dan materi pembelajaran melalui email. Admin kami akan menghubungi kamu dan anggota kelompokmu melalui Whatsapp. Sampai jumpa di kelas!</h3>
                <h3 className='font-bold font-Cairo mt-[20px] mx-[10px] lg:text-[16px] text-center text-[14px]'>Beri tahu kami bagaimana pengalamanmu mengisi formulir ini?</h3>
                <form action="flex flex-row">
                    <div className='flex flex-row flex-wrap justify-center'>
                        {
                            rating.map((data,index) => {
                                return(
                                    <div key={index} className="mt-[30px] mx-[10px]">
                                        <div className='flex text-center font-Cairo text-[11px] flex-col'>
                                            <input id={data.id} checked className='flex-row peer hidden' type="radio" name="rating" />
                                            <label htmlFor={data.id} className='text-[50px] peer-checked:text-[#FFAE5F] hover:text-[#4D74CC]  mb-[20px] text-[#A7ABB8] justify-center flex'>{data.icon}</label>
                                            {data.label}
                                        </div>
                                    </div>
                                    )
                            })
                        }
                    </div>
                    <div className='mt-[30px] flex justify-center'>
                    <label className='font-bold text-[16px]'></label>
                            <div className='mb-6 relative'>
                                <div className='absolute inset-y-0 left-0 flex mt-[20px] pl-3 pointer-events-none'>
                                    <FaPen className='text-[#B0B1B0] text-[18px]'/>
                                </div>
                                <textarea 
                                    rows={4}
                                    onChange={(e) => setUserData({...userData, "saran" : e.target.value})} 
                                    value= {userData['saran']}
                                    name='saran' 
                                    className='border outline-none h-[200px] focus:ring-2  focus:ring-[#3C64B1] w-[344px] lg:w-[500px] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' 
                                    required 
                                    placeholder='Tuliskan masukkanmu disini'/>
                            </div>
                    </div>
                </form>
                <div className='flex flex-col'>
                    <button onClick={() => setStep(3)} className='bg-[#5885E9] font-Cairo rounded-xl mt-[30px] mb-[10px] shadow-effect px-[90px] lg:px-5 text-white p-3 font-bold'>Kembali ke Beranda</button>
                    <button onClick={() => setStep(3)} className=' font-Cairo text-[#5885E9] rounded-xl text-center px-5 mb-[50px] underline p-3 font-bold'>Daftar Kelas Lainnya</button>
                </div>
            </div>
        </>
    )
}
