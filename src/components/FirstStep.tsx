import React from 'react'
import {Button, TextField} from '@mui/material'
import { MdEmail } from "react-icons/md";
import { FaUser, FaSchool } from "react-icons/fa";

export default function FirstStep() {
    const studi = [
        {
            label: "S1 Teknik Kimia",
            id: "pil1"
        },
        {
            label: "S1 Teknologi Bioproses",
            id: "pil2"
        },
        {
            label: "S2 Teknik Kimia",
            id: "pil3"
        },
        {
            label: "S3 Teknik Kimia",
            id: "pil4"
        },
    ]

    const univ = [
        {
            label: "Universitas Indonesia",
            id: "pil1"
        },
        {
            label: "Institut Teknologi Bandung",
            id: "pil2"
        },
        {
            label: "Institut Teknologi Sepuluh November",
            id: "pil3"
        },        
        {
            label: "Universitas Sriwijaya",
            id: "pil4"
        },        
        {
            label: "Universitas Muhammadiyah Surakarta",
            id: "pil5"
        },
    ]

    const sosmed = [
        {
            label: "Instagram",
            id: "pil1"
        },
        {
            label: "Facebook",
            id: "pil2"
        },
        {
            label: "Tiktok",
            id: "pil3"
        },        
        {
            label: "Linkedin",
            id: "pil4"
        },        
        {
            label: "Line",
            id: "pil5"
        },
        {
            label: "Teman atau Keluarga",
            id: "pil6"
        },
    ]

    return (
        <>
            <div className='lg:mx-[100px] mx-[20px] lg:w-[820px] xl:w-[1300px] lg:mt-[100px]'>
                <h1 className='font-medium vsm:text-[22px] font-Rajdhani mt-[50px] lg:mt-[50px] text-[#151515] lg:text-[30px]'>Data Personal</h1>
                <h3 className='text-[#727272] font-Cairo text-[12px] xl:w-[1300px] lg:w-[820px] vsm:w-[344px] lg:text-[16px]'>Masukkan data diri kamu untuk memulai kelas. Satu formulir hanya bisa digunakan untuk satu Mata Kuliah (Kursus), namun teman-teman bisa memilih beberapa Sesi Pelajaran di dalam satu mata kuliah tersebut.</h3>

                <div className='mt-[30px]'>
                    <form action="">
                        <div className='flex font-Cairo flex-col flex-wrap'>
                            <label className='font-bold text-[16px]'>Email</label>
                            <div className='mb-6 relative'>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <MdEmail className='text-[#B0B1B0] text-[18px] mt-[10px]'/>
                                </div>
                                <input type="text" name='email' className='border outline-none focus:ring-2  focus:text-[#3C64B1] focus:ring-[#3C64B1] w-[344px] lg:w-[500px] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' required placeholder='Misal: nama@gmail.com'/>
                            </div>

                            <label className='font-bold  text-[16px]'>Nama Lengkap</label>
                            <div className='mb-6 relative'>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <FaUser className='text-[#B0B1B0] text-[18px] mt-[10px]'/>
                                </div>
                                <input type="text" name='fullname' className='border lg:w-[500px] pl-[40px] w-[344px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' required  placeholder='Tulis nama lengkap'/>
                            </div>

                            <label className='font-bold  text-[16px]'>Nomor Handphone</label>
                            <div className='mb-6 relative'>
                                {/* <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <FaUser className='text-[#B0B1B0] text-[18px] mt-[10px]'/>
                                </div> */}
                                <input type="tel" name='phone' className='border w-[344px]  lg:w-[500px] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' required  placeholder='Tulis nomor handphone'/>
                            </div>

                            <label className='font-bold text-[16px]'>Program Studi</label>
                            <div className='mb-6 flex flex-row flex-wrap vsm:w-[344px]'>
                                {
                                    studi.map((data, index)=> {
                                        return(
                                            <div key={index} className='border border-[#B0B1B0] mr-[20px] rounded-2xl p-2 mt-[20px]'>
                                                <input type="radio" id={data.id}  name='program_studi' className='border text-[13px] border-[#B0B1B0] rounded-2xl p-2' />
                                                <label htmlFor={data.id} className="ml-3 text-center">{data.label}</label>
                                            </div>
                                        )
                                    })
                                }
                                
                                <div className='border border-[#B0B1B0] mr-[20px] rounded-2xl p-2 mt-[20px] z-50 bg-white'>
                                    <div className="relative z-1000">
                                        <div className="other z-1000">
                                            <input type="radio" id="lainnya" name='program_studi' className='relative z-50' />
                                            <label htmlFor="lainnya" className="ml-3 text-center">Lainnya</label>
                                        </div>
                                    </div>
                                </div>
                                <input type="text" name="program_studi" id="lainnya" className='-ml-[50px] mr-[20px] rounded-2xl p-2 pl-10 pr-8 mt-[20px] border z-10' placeholder='Masukkan program studi'/>
                            </div>

                            <label className='font-bold  text-[16px]'>Angkatan</label>
                            <div className='mb-6 relative'>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <FaSchool className='text-[#B0B1B0] text-[18px] mt-[10px]'/>
                                </div>
                                <input type="text" name='angkatan' className='border vsm:w-[344px] lg:w-[500px] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' required  placeholder='Tahun Angkatan'/>
                            </div>

                            <label className='font-bold text-[16px]'>Universitas</label>
                            <div className='mb-6 flex flex-row vsm:w-[344px] lg:w-[822px] xl:w-[1300px] flex-wrap'>
                                {
                                    univ.map((data, index)=> {
                                        return(
                                            <div key={index} className='border border-[#B0B1B0] mr-[15px] rounded-2xl p-2 mt-[20px]'>
                                                <input type="radio" id={data.id}  name='universitas' className='border text-[13px] border-[#B0B1B0] rounded-2xl p-2' />
                                                <label htmlFor={data.id} className="ml-3 text-center">{data.label}</label>
                                            </div>
                                        )
                                    })
                                }
                                <div className='border border-[#B0B1B0] mr-[20px] rounded-2xl p-2 mt-[20px] z-50 bg-white'>
                                    <div className="relative z-1000">
                                        <div className="other z-1000">
                                            <input type="radio" id="lainnya" name='universitas' className='relative z-50' />
                                            <label htmlFor="lainnya" className="ml-3 text-center">Lainnya</label>
                                        </div>
                                        
                                    </div>
                                </div>
                                <input type="text" name="universitas" id="lainnya" className='-ml-[50px] mr-[20px] rounded-2xl p-2 pl-10 mt-[20px] border z-10' placeholder='Masukkan universitas'/>
                            </div>

                            <label className='font-bold text-[16px]'>Darimana anda mengetahui tentang Torche</label>
                            <div className='mb-6 flex flex-row vsm:w-[344px] lg:w-[820px] xl:w-[1200px] flex-wrap'>
                                {
                                    sosmed.map((data, index)=> {
                                        return(
                                            <div key={index} className='border border-[#B0B1B0] mr-[5px] lg:mr-[30px] rounded-2xl p-2 mt-[20px]'>
                                                <input type="radio" id={data.id}  name='sosmed' className='border text-[13px] border-[#B0B1B0] rounded-2xl p-2' />
                                                <label htmlFor={data.id} className="ml-3 text-center">{data.label}</label>
                                            </div>
                                        )
                                    })
                                }
                                <div className='border border-[#B0B1B0] mr-[20px] rounded-2xl p-2 mt-[20px] z-50 bg-white'>
                                    <div className="relative z-1000">
                                        <div className="other z-1000">
                                            <input type="radio" id="lainnya" name='sosmed' className='relative z-50' />
                                            <label htmlFor="lainnya" className="ml-3 text-center">Lainnya</label>
                                        </div>
                                        
                                    </div>
                                </div>
                                <input type="text" name="sosmed" id="lainnya" className='-ml-[50px]  mr-[20px] rounded-2xl p-2 pl-10 pr-8 mt-[20px] border z-10' placeholder='Masukkan sumber lain'/>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='mr-0 ml-auto block bg-[#5885E9] font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-white p-3 font-bold shadow-effect'>Berikutnya</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
