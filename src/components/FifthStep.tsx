import React, { useContext } from 'react'
import { multiStepContext } from '../pages/StepContext'
import { rating } from "../dummy-data";
import Image from 'next/image'
import HeroIcons from '../assets/img/Form 5.png'
import { FaPen } from 'react-icons/fa';

export default function FifthStep() {

    return (
        <>
            <div className='flex flex-col items-center mt-[50px]'>
                <Image src={HeroIcons} alt={'Hero'} className="w-[480px] h-[434px]"/>
                <h1 className='font-Cairo mt-[30px] font-bold text-[23px]'>Yeay! Pendaftaran telah berhasil dilakukan</h1>
                <h3 className='xl:w-[700px] my-[20px] text-center font-Cairo text-[#727272]'>Kami akan memberikan link Google Meet dan materi pembelajaran melalui email. Admin kami akan menghubungi kamu dan anggota kelompokmu melalui Whatsapp. Sampai jumpa di kelas!</h3>
                <h3 className='font-bold font-Cairo mt-[20px] text-[16px]'>Beri tahu kami bagaimana pengalamanmu mengisi formulir ini?</h3>
                <form action="flex flex-row">
                    <div className='flex flex-row flex-wrap'>
                        {
                            rating.map((data,index) => {
                                return(
                                    <div key={index} className="mt-[30px] mx-[20px]">
                                        <i className='text-[50px] mb-[20px] text-[#A7ABB8] justify-center flex'>{data.icon}</i>
                                        <label htmlFor="rating" className='flex text-center font-Cairo text-[11px] flex-col'>
                                            <input className='hidden flex-row' type="radio" name="rating" id="rating" />
                                            {data.label}
                                        </label>
                                    </div>
                                    )
                            })
                        }
                    </div>
                    <div className='mt-[30px]'>
                        <label htmlFor="message"></label>
                        <div className='relative'>
                            {/* <div className='absolute inset-y-0 left-0 flex pl-3 pointer-events-none'>
                                <FaPen className='text-[#B0B1B0] mt-[15px] text-[15px]'/>
                            </div> */}
                            <textarea
                            rows={4}
                            id="message"  
                            className="block outline-none p-2.5 w-full placeholder:pl-[30px] text-sm rounded-lg border-2 border-[#A7ABB8]" 
                            placeholder="Tulis Masukkanmu disini"
                            required
                            />
                        </div>
                    </div>
                </form>
                <div className='flex flex-col'>
                    <a href='' className='bg-[#5885E9] font-Cairo rounded-xl mt-[30px] mb-[10px] shadow-effect px-5 text-white p-3 font-bold'>Kembali ke Beranda</a>
                    <a href='' className=' font-Cairo text-[#5885E9] rounded-xl px-5 mb-[50px] underline p-3 font-bold'>Daftar Kelas Lainnya</a>
                </div>
            </div>
        </>
    )
}
