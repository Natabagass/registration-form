import React, { useContext } from 'react'
import {Button, TextField} from '@mui/material'
import { MdEmail } from "react-icons/md";
import { FaUser, FaSchool } from "react-icons/fa";
import { sosmed, univ, studi } from "../dummy-data";
import { multiStepContext } from '../pages/StepContext';

export default function FirstStep() {
    const {setStep, userData, setUserData} = useContext(multiStepContext)
    return (
        <>
            <div className='lg:mx-[100px] mx-[20px] lg:w-[820px] xl:w-[1300px] lg:mt-[100px]'>
                <h1 className='font-medium vsm:text-[22px] font-Rajdhani mt-[50px] lg:mt-[50px] text-[#151515] lg:text-[30px]'>Data Personal</h1>
                <h3 className='text-[#727272] lg:leading-[26px] leading-[24px] font-Cairo text-[12px] xl:w-[1300px] lg:w-[820px] vsm:w-[344px] lg:text-[16px]'>Masukkan data diri kamu untuk memulai kelas. Satu formulir hanya bisa digunakan untuk satu Mata Kuliah (Kursus), namun teman-teman bisa memilih beberapa Sesi Pelajaran di dalam satu mata kuliah tersebut.</h3>

                <div className='mt-[30px]'>
                    <form action="">
                        <div className='flex font-Cairo flex-col flex-wrap'>
                            <label className='font-bold text-[16px]'>Email</label>
                            <div className='mb-6 relative'>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <MdEmail className='text-[#B0B1B0] text-[18px] mt-[10px]'/>
                                </div>
                                <input 
                                    type="text" 
                                    onChange={(e) => setUserData({...userData, "email" : e.target.value})} 
                                    value= {userData['email']}
                                    name='email' 
                                    className='border outline-none focus:ring-2  focus:text-[#3C64B1] focus:ring-[#3C64B1] w-[344px] lg:w-[500px] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' 
                                    required 
                                    placeholder='Misal: nama@gmail.com'/>
                            </div>

                            <label className='font-bold  text-[16px]'>Nama Lengkap</label>
                            <div className='mb-6 relative'>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <FaUser className='text-[#B0B1B0] text-[18px] mt-[10px]'/>
                                </div>
                                <input 
                                    type="text" 
                                    name='fullname' 
                                    onChange={(e) => setUserData({...userData, "fullname" : e.target.value})} 
                                    value= {userData['fullname']}
                                    className='border lg:w-[500px] pl-[40px] w-[344px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' 
                                    required  
                                    placeholder='Tulis nama lengkap'/>
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
                                            <div key={index} className='p-2 -ml-[20px] mr-[20px] mt-[20px]'>
                                                <input 
                                                    type="radio" 
                                                    onChange={(e) => setUserData({...userData, "program_studi" : e.target.value})} 
                                                    value= {data.label}
                                                    id={data.id}  
                                                    name='program_studi' 
                                                    className='peer absolute mt-[7px] ml-[20px] border-[#B0B1B0]' 
                                                    required
                                                    />
                                                <label htmlFor={data.id} className="ml-3 pl-[30px] peer-checked:bg-[#F5F7FF]  rounded-2xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0] p-2 peer-checked:text-[#5885E9] text-[13px]">
                                                    {data.label}</label>
                                            </div>
                                        )
                                    })
                                }
                                
                                <div className='p-2 mt-[19px] z-50 '>
                                    <div className="relative z-1000">
                                        <div className="other z-1000">
                                            <input 
                                                type="radio" 
                                                id="lainnya"
                                                onChange={(e) => setUserData({...userData, "program_studi" : e.target.value})} 
                                                name='program_studi' 
                                                className='absolute peer mt-[7px] border-[#B0B1B0]' />
                                            <label htmlFor="lainnya" className="-ml-[10px] lg: pl-[30px] mr-[10px] peer-checked:bg-[#F5F7FF] bg-white rounded-2xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0] p-2 peer-checked:text-[#5885E9] text-[13px] text-center">Lainnya</label>
                                        </div>
                                    </div>
                                </div>
                                <input 
                                    type="text" 
                                    name="program_studi" 
                                    id="textLain" 
                                    onChange={(e) => setUserData({...userData, "program_studi" : e.target.value})} 
                                    className='-ml-[50px] outline-none focus:ring-1 focus:ring-[#5885E9] text-[13px] rounded-2xl p-2 pl-10 pr-8 mt-[20px] border z-10' 
                                    placeholder='Masukkan program studi'/>
                            </div>

                            <label className='font-bold  text-[16px]'>Angkatan</label>
                            <div className='mb-6 relative'>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <FaSchool className='text-[#B0B1B0] text-[18px] mt-[10px]'/>
                                </div>
                                <input 
                                    type="text" 
                                    name='angkatan' 
                                    onChange={(e) => setUserData({...userData, "angkatan" : e.target.value})} 
                                    value= {userData['angkatan']}
                                    className='border vsm:w-[344px] lg:w-[500px] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' 
                                    required  
                                    placeholder='Tahun Angkatan'/>
                            </div>

                            <label className='font-bold text-[16px]'>Universitas</label>
                            <div className='mb-6 flex flex-row vsm:w-[344px] lg:w-[822px] xl:w-[1300px] flex-wrap'>
                                {
                                    univ.map((data, index)=> {
                                        return(
                                            <div key={index} className='p-2 -ml-[20px] mr-[20px] mt-[20px]'>
                                            <input 
                                                type="radio" 
                                                onChange={(e) => setUserData({...userData, "universitas" : e.target.value})} 
                                                value= {data.label}
                                                id={data.id}  
                                                name='universitas' 
                                                className='peer absolute mt-[7px] ml-[20px] border-[#B0B1B0]' 
                                                required
                                                />
                                            <label htmlFor={data.id} className="ml-3 pl-[30px] peer-checked:bg-[#F5F7FF]  rounded-2xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0] p-2 peer-checked:text-[#5885E9] text-[13px]">
                                                {data.label}</label>
                                            </div>
                                        )
                                    })
                                }
                                <div className='flex flex-row'>
                                    <div className='p-2 mt-[19px] z-50 '>
                                        <div className="relative z-1000">
                                            <div className="other z-1000">
                                                <input 
                                                    type="radio" 
                                                    id="univLain"
                                                    onChange={(e) => setUserData({...userData, "universitas" : e.target.value})} 
                                                    name='universitas' 
                                                    className='absolute peer mt-[7px] border-[#B0B1B0]' />
                                                <label htmlFor="univLain" className="-ml-[10px] lg: pl-[30px] mr-[10px] peer-checked:bg-[#F5F7FF] bg-white rounded-2xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0] p-2 peer-checked:text-[#5885E9] text-[13px] text-center">Lainnya</label>
                                            </div>
                                        </div>
                                    </div>
                                    <input 
                                    type="text" 
                                    name="program_studi" 
                                    id="textUnivLain" 
                                    onChange={(e) => setUserData({...userData, "program_studi" : e.target.value})} 
                                    className='-ml-[50px] outline-none focus:ring-1 focus:ring-[#5885E9] text-[13px] rounded-2xl p-2 pl-10 pr-8 mt-[20px] border z-10' 
                                    placeholder='Masukkan universitas'/>
                                </div>
                            </div>

                            <label className='font-bold text-[16px]'>Darimana anda mengetahui tentang Torche</label>
                            <div className='mb-6 flex flex-row vsm:w-[344px] lg:w-[820px] xl:w-[1200px] flex-wrap'>
                                {
                                    sosmed.map((data, index)=> {
                                        return(
                                            <div key={index} className='p-2 -ml-[20px] mr-[20px] mt-[20px]'>
                                            <input 
                                                type="radio" 
                                                onChange={(e) => setUserData({...userData, "sosmed" : e.target.value})} 
                                                value= {data.label}
                                                id={data.id}  
                                                name='sosmed' 
                                                className='peer absolute mt-[7px] ml-[20px] border-[#B0B1B0]' 
                                                required
                                                />
                                            <label htmlFor={data.id} className="ml-3 pl-[30px] peer-checked:bg-[#F5F7FF]  rounded-2xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0] p-2 peer-checked:text-[#5885E9] text-[13px]">
                                                {data.label}</label>
                                            </div>
                                        )
                                    })
                                }
                                    <div className='p-2 mt-[19px] z-50 '>
                                        <div className="relative z-1000">
                                            <div className="other z-1000">
                                                <input 
                                                    type="radio" 
                                                    id="sosmedLain"
                                                    onChange={(e) => setUserData({...userData, "sosmed" : e.target.value})} 
                                                    name='sosmed' 
                                                    className='absolute peer mt-[7px] border-[#B0B1B0]' />
                                                <label htmlFor="sosmedLain" className="-ml-[10px] lg: pl-[30px] mr-[10px] peer-checked:bg-[#F5F7FF] bg-white rounded-2xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0] p-2 peer-checked:text-[#5885E9] text-[13px] text-center">Lainnya</label>
                                            </div>
                                        </div>
                                    </div>              
                                <input 
                                    type="text" 
                                    name="sosmed" 
                                    id="textSosmedLain" 
                                    onChange={(e) => setUserData({...userData, "sosmed" : e.target.value})} 
                                    className='-ml-[50px] outline-none focus:ring-1 focus:ring-[#5885E9] text-[13px] rounded-2xl p-2 pl-10 pr-8 mt-[20px] border z-10' 
                                    placeholder='Masukkan sumber lain'/>
                            </div>
                        </div>
                        <div>
                            <button 
                                type='submit' 
                                onClick={() => setStep(2)} 
                                className='mr-0 ml-auto block bg-[#5885E9] font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-white p-3 font-bold shadow-effect'
                                >
                                    Berikutnya
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}