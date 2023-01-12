import React, { useContext, useState } from 'react';
import { multiStepContext } from '../pages/StepContext';
import { MdEmail } from "react-icons/md";
import { FaUser, FaDiscord } from "react-icons/fa";
import { CountryCode } from '../pages/api/CountryCodes';

export default function ThirdStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext)
    const counter = 10;
    const counterArray = Array.from(Array(counter).keys());
    const choosenCounter = userData.counter;
    const [counterArrays, setCounterArrays] = useState(Array.from(Array(choosenCounter).keys()));

    return (
        <>
            <form>
                <div className='lg:mx-[100px] mx-[30px] mt-[50px] '>
                    <div className='mb-[50px]'>
                        <h1 className='text-[22px] font-medium font-Rajdhani'>Anggota Kelompok Belajar</h1>
                        <h3 className='xl:text-[16px] text-[12px] lg:text-[14px] font-Cairo lg:leading-[26px] leading-[24px] text-[#727272]'>Pilih jumlah peserta yang akan mengikuti kegiatan pembelajaran ini. </h3>

                        <div>
                            <h1 className='font-bold mt-[30px] font-Cairo mb-3'>Jumlah Peserta</h1>
                            <div>
                                {counterArray.map((item, index) => {
                                    return (
                                        <button key={index} onClick={() => {
                                            setUserData({ ...userData, "counter": item + 1 });
                                            setCounterArrays(Array.from(Array(item + 1).keys()));
                                        }}
                                            className='border px-5 mt-[10px] py-3 rounded-xl hover:bg-[#F5F7FF] active:bg-[#5885E9] active:text-white mr-3'>
                                            {item + 1}
                                        </button>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-[22px] font-medium font-Rajdhani'>Data Anggota Kelompok</h1>
                        <h3 className='xl:text-[16px] vsm:text-[12px] lg:text-[14px] font-Cairo lg:leading-[26px] leading-[24px] text-[#727272]'>Masukkan data diri teman-teman anggota kelompok yang akan mengikuti kegiatan pembelajaran ini. Perhatian! Akun Discord digunakan untuk mendapatkan gratis 7 hari konsultasi setelah sesi kelas. Jika tidak mengisi, maka kamu tidak memenuhi syarat untuk mendapatkan konsultasi kelas dan komunikasi dengan Tutor akan menggunakan Google Chat. </h3>

                        <div className='grid grid-cols-12'>
                            {choosenCounter > 0 && choosenCounter <= 10 ? (
                                counterArrays.map((item, index) => {
                                    return (
                                        <div key={index} className="lg:col-span-4 md:col-span-6 col-span-12 mt-10 md:pr-10">
                                            <h6 className='font-bold text-[23px] mb-4'>Anggota {item + 1}</h6>

                                            <label className='font-bold text-[16px]'>Email</label>
                                            <div className='mb-6 relative'>
                                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                                    <MdEmail className='text-[#B0B1B0] text-[18px] mt-[10px]' />
                                                </div>
                                                <input
                                                    type="text"
                                                    onChange={(e) => setUserData({ ...userData, "email": e.target.value })}
                                                    value={userData['email']}
                                                    name='email'
                                                    className='border outline-none hover:border-[#4D74CC] focus:border-[#5885E9] w-full pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2'
                                                    required
                                                    placeholder='Misal: nama@gmail.com' />
                                            </div>

                                            <label className='font-bold text-[16px]'>Nama Lengkap</label>
                                            <div className='mb-6 relative'>
                                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                                    <FaUser className='text-[#B0B1B0] text-[18px] mt-[10px]' />
                                                </div>
                                                <input
                                                    type="text"
                                                    name='fullName'
                                                    onChange={(e) => setUserData({ ...userData, "fullName": e.target.value })}
                                                    value={userData['fullName']}
                                                    className='border pl-[40px] outline-none hover:border-[#4D74CC] focus:border-[#5885E9] w-full text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2'
                                                    required
                                                    placeholder='Tulis nama lengkap' />
                                            </div>

                                            <label className='font-bold  text-[16px]'>Nomor Handphone</label>
                                            <div className='mb-6 relative'>
                                                <div className="flex mt-[10px]">
                                                    <select name='phoneNumber' className="border outline-none bg-[#F5F8FF] text-[#5885E9] focus:border-[#5885E9] hover:border-[#5885E9] text-[13px] border-[#B0B1B0] rounded-l-2xl px-3 py-1">
                                                        {CountryCode.map((item, index) => {
                                                            return (
                                                                <option key={index}>+{item.dial_code}</option>
                                                            )
                                                        })
                                                        }
                                                    </select>
                                                    <input type="tel" name='phoneNumber' className="border lg:w-[415px] outline-none focus:border-[#5885E9] hover:border-[#5885E9] w-[260px] text-[13px] border-[#B0B1B0] rounded-r-2xl p-2" placeholder="Tulis nomor handphone"></input>
                                                </div>
                                            </div>

                                            <label className='font-bold text-[16px]'>Akun Discord</label>
                                            <div className='mb-6 relative'>
                                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                                    <FaDiscord className='text-[#B0B1B0] text-[18px] mt-[10px]' />
                                                </div>
                                                <input
                                                    type="text"
                                                    onChange={(e) => setUserData({ ...userData, "discord": e.target.value })}
                                                    value={userData['discord']}
                                                    name='discord'
                                                    className='border outline-none hover:border-[#4D74CC] focus:border-[#5885E9] w-full pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2'
                                                    required
                                                    placeholder='Misal: username#1234' />
                                            </div>
                                        </div>
                                    )
                                }))
                                : null}
                        </div>
                    </div>


                    <div className='flex flex-row'>
                        <button type='submit' onClick={() => setStep(2)} className='mr-10 ml-auto block font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-[#5885E9] p-3 font-bold'>Kembali</button>
                        <button type='submit' onClick={() => setStep(4)} className='mr-0  block bg-[#5885E9] font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-white p-3 font-bold shadow-effect'>Berikutnya</button>
                    </div>
                </div>
            </form>
        </>
    )
}
