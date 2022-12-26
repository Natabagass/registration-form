import React from 'react'
import {Button, TextField} from '@mui/material'
import * as yup from 'yup'
import { Formik, Field } from 'formik';
import { MdEmail } from "react-icons/md";
import { FaUser, FaSchool } from "react-icons/fa";
import { sosmed, univ, studi } from "../dummy-data";

const validationSchema = yup.object({
    email: yup.string().required('Email is required')
})

export default function FirstStep() {
    return (
        <>
            <div className='lg:mx-[100px] mx-[20px] lg:w-[820px] xl:w-[1300px] lg:mt-[100px]'>
                <h1 className='font-medium vsm:text-[22px] font-Rajdhani mt-[50px] lg:mt-[50px] text-[#151515] lg:text-[30px]'>Data Personal</h1>
                <h3 className='text-[#727272] lg:leading-[26px] leading-[24px] font-Cairo text-[12px] xl:w-[1300px] lg:w-[820px] vsm:w-[344px] lg:text-[16px]'>Masukkan data diri kamu untuk memulai kelas. Satu formulir hanya bisa digunakan untuk satu Mata Kuliah (Kursus), namun teman-teman bisa memilih beberapa Sesi Pelajaran di dalam satu mata kuliah tersebut.</h3>

                <div className='mt-[30px]'>
        <Formik
            initialValues={{
                email: '',
                fullname: '',
                program_studi: '',
                angkatan: '',
                universitas: '',
                sosmed: '',
            }}
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2))
            }}
            validationSchema={validationSchema}
        >
            {(formik) => (
            <form onSubmit={formik.handleSubmit}>
                <div className='flex font-Cairo flex-col flex-wrap'>
                            <label className='font-bold text-[16px]'>Email</label>
                            <div className='mb-6 relative '>
                                <div className='absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none'>
                                    <MdEmail className='text-[#B0B1B0] focus:text-[#4D74CC] text-[18px] mt-[10px]'/>
                                </div>
                                <input
                                    type="text" 
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    name='email' 
                                    className='border outline-none hover:border-[#4D74CC] focus:ring-1  focus:ring-[#3C64B1] w-[344px] lg:w-[500px] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' 
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
                                    value={formik.values.fullname}
                                    onChange={formik.handleChange}
                                    name='fullname' 
                                    className='border lg:w-[500px] hover:border-[#4D74CC]  outline-none focus:ring-1  pl-[40px] w-[344px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' 
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
                                            <div key={index} className='border border-[#B0B1B0] mr-[20px] rounded-2xl p-2 mt-[20px]'>
                                                <input
                                                    type="radio"
                                                    value={data.label}
                                                    id={data.id} 
                                                    name='program_studi' 
                                                    required 
                                                    className='border border-[#B0B1B0] rounded-2xl p-2' />
                                                <label htmlFor={data.id} className="ml-3 text-[13px] text-center">{data.label}</label>
                                                <div></div>
                                            </div>
                                        )
                                    })
                                }
                                
                                <div className='border border-[#B0B1B0] mr-[20px] rounded-2xl p-2 mt-[20px] z-50 bg-white'>
                                    <div className="relative z-1000">
                                        <div className="other z-1000">
                                            <input 
                                                type="radio" 
                                                id="lainnya"
                                                value="lainnya"
                                                onChange={formik.handleChange} 
                                                name='program_studi' 
                                                className='relative z-50' />
                                            <label htmlFor="lainnya" className="ml-3 text-[13px] text-center">Lainnya</label>
                                        </div>
                                    </div>
                                </div>
                                <input 
                                    type="text"
                                    onChange={formik.handleChange} 
                                    name="program_studi" 
                                    id="lainnya" 
                                    className='-ml-[50px] mr-[20px] text-[13px] rounded-2xl p-2 pl-10 pr-8 mt-[20px] border z-10' placeholder='Masukkan program studi'/>
                            </div>

                            <label className='font-bold  text-[16px]'>Angkatan</label>
                            <div className='mb-6 relative'>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <FaSchool className='text-[#B0B1B0] text-[18px] mt-[10px]'/>
                                </div>
                                <input 
                                    type="text"
                                    value={formik.values.angkatan} 
                                    onChange={formik.handleChange}
                                    name='angkatan' 
                                    className='border vsm:w-[344px] lg:w-[500px] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' required  placeholder='Tahun Angkatan'/>
                            </div>

                            <label className='font-bold text-[16px]'>Universitas</label>
                            <div className='mb-6 flex flex-row vsm:w-[344px] lg:w-[822px] xl:w-[1300px] flex-wrap'>
                                {
                                    univ.map((data, index)=> {
                                        return(
                                            <div key={index} className='border border-[#B0B1B0] mr-[30px] rounded-2xl p-2 mt-[20px]'>
                                                <input 
                                                    type="radio" 
                                                    id={data.id}
                                                    value={data.label}
                                                    onChange={formik.handleChange} 
                                                    name='universitas' 
                                                    className='border text-[13px] border-[#B0B1B0] rounded-2xl p-2' />
                                                <label htmlFor={data.id} className="ml-3 text-center text-[13px]">{data.label}</label>
                                            </div>
                                        )
                                    })
                                }
                                <div className='flex flex-row'>
                                    <div className='border border-[#B0B1B0] flex flex-col mr-[20px] rounded-2xl p-2 mt-[20px] z-50 bg-white'>
                                        <div className="relative z-1000">
                                            <div className="other z-1000">
                                                <input 
                                                    type="radio" 
                                                    id="lainnya" 
                                                    value="lainnya"
                                                    onChange={formik.handleChange} 
                                                    name='universitas' 
                                                    className='relative z-50' />
                                                <label htmlFor="lainnya" className="ml-3 text-center text-[13px]">Lainnya</label>
                                            </div>
                                        </div>
                                    </div>
                                    <input 
                                        type="text" 
                                        name="universitas" 
                                        onChange={formik.handleChange} 
                                        id="lainnya" 
                                        className='text-[13px] -ml-[50px] mr-[20px] rounded-2xl p-2 pl-10 mt-[20px] border z-10' placeholder='Masukkan universitas'/>
                                </div>
                            </div>

                            <label className='font-bold text-[16px]'>Darimana anda mengetahui tentang Torche</label>
                            <div className='mb-6 flex flex-row vsm:w-[344px] lg:w-[820px] xl:w-[1200px] flex-wrap'>
                                {
                                    sosmed.map((data, index)=> {
                                        return(
                                            <div key={index} className='border border-[#B0B1B0] mr-[5px] lg:mr-[30px] rounded-2xl p-2 mt-[20px]'>
                                                <input 
                                                    type="radio" 
                                                    id={data.id}  
                                                    value={data.label}
                                                    onChange={formik.handleChange}  
                                                    name='sosmed' 
                                                    className='border text-[13px] border-[#B0B1B0] rounded-2xl p-2' />
                                                <label htmlFor={data.id} className="ml-3 text-center text-[13px]">{data.label}</label>
                                            </div>
                                        )
                                    })
                                }
                                <div className='border border-[#B0B1B0] mr-[20px] rounded-2xl p-2 mt-[20px] z-50 bg-white'>
                                    <div className="relative z-1000">
                                        <div className="other z-1000">
                                            <input 
                                                type="radio" 
                                                id="lainnya" 
                                                value="lainnya"
                                                onChange={formik.handleChange}
                                                name='sosmed' 
                                                className='relative z-50' />
                                            <label htmlFor="lainnya" className="ml-3 text-center text-[13px]">Lainnya</label>
                                        </div>
                                    </div>
                                </div>
                                <input 
                                    type="text" 
                                    name="sosmed" 
                                    onChange={formik.handleChange} 
                                    id="lainnya" 
                                    className='-ml-[50px]  mr-[20px] text-[13px] rounded-2xl p-2 pl-10 pr-8 mt-[20px] border z-10' placeholder='Masukkan sumber lain'/>
                            </div>
                        </div>
                        <Button 
                            type='submit' 
                            variant='contained' 
                            className='mr-0 ml-auto block bg-[#5885E9] font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-white p-3 font-bold shadow-effect'
                            >Berikutnya
                        </Button>
            </form>
            )}
            </Formik>
                </div>
            </div>
        </>
    )
}
