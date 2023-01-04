import React, { useContext, useState, useEffect } from 'react'
import AppPagination from '../pages/pagination'
import Stack from '@mui/material/Stack';
// import { makeStyles } from '@mui/styles';
import { kelas, kelasPerkuliahan, mataKuliah, materi } from "../dummy-data";
import { multiStepContext } from '../pages/StepContext';
import { BsPeopleFill, BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { HiPencilAlt } from 'react-icons/hi'
import { TiArrowSortedDown } from 'react-icons/ti'
import { GiBookCover } from 'react-icons/gi'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../pages/_app";
import { Pagination, Navigation } from "swiper";
import * as CurrencyFormat from 'react-currency-format';


export default function SecondStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext)

    return (
        <>
            <form>
                <div className='lg:mx-[100px] xl:w-[1300px] lg:mt-[100px] mx-[30px] mt-[50px] w-100'>
                <h1 className='font-Rajdhani font-medium lg:text-[28px] xl:text-[28px] text-[22px]'>Kelas Pilihan</h1>
                    <h3 className='xl:text-[16px] text-[12px] lg:text-[14px] font-Cairo lg:leading-[26px] leading-[24px] text-[#727272]'>Pilih salah satu metode pembelajaran dan mata kuliah (kursus) serta materi yang ingin kamu pelajari atau diskusikan. Khusus <span className='font-bold'>Kelas Konsultasi</span> dan <span className='font-bold'>Kelas Persiapan Ujian</span>, jika jumlah materi yang dipilih melebihi batas yang ditentukan, maka Torche Education berhak untuk mengeliminasi materi sesuai dengan batas yang ditentukan. Sebagai contoh: Jika kalian memilih 3 materi (misalkan A, B, C) namun hanya ingin 1 pertemuan, maka Torche Education berhak mengeliminasi 1 materi. </h3>

                    <div>
                        <h1 className='font-bold text-[14px] md:text-[16px] mt-[30px] font-Cairo'>Metode Pembelajaran</h1>
                        <div className='flex-col hidden lg:flex md:flex-row '>
                            {
                                kelas.map((item: any, index: any) => {
                                    return (
                                        <div className='flex text-center mt-[20px]' key={index}>
                                            <input
                                                type="radio"
                                                name='metode'
                                                id={item.id}
                                                className='peer hidden'
                                                value={item.title} />
                                            <label htmlFor={item.id} className="border peer-checked:bg-[#F5F7FF] peer-checked:text-[#5885E9] hover:border-[#4D74CC] -ml-[2px] mx-[30px] rounded-xl peer-checked:border-[#5885E9]">
                                                <span className='icon text-white hover:text-white hover:bg-[#4D74CC] rounded-full my-[50px] flex mx-auto w-fit p-5 text-[20px] bg-[#4D74CC]'>
                                                    {item.icon}</span>
                                                <h1 className='font-Cairo font-bold text-[18px] md:text-[19px] mb-[20px]'>{item.title}</h1>
                                                <h1 className='text-[12px] md:text-[13px] font-Cairo mx-[20px] text-[#727272] mb-[20px]'>{item.desc}</h1>
                                                <hr className='mx-[30px] border-[#B1C4F0]' />
                                                <div className='mx-[30px] mt-[30px]'>
                                                    {
                                                        item.benefit.map((sub: any, index: any) => {
                                                            return (
                                                                <div key={index} className='flex flex-col text-[#494949] text-[14px]'>
                                                                    <div className='flex flex-row font-Cairo text-left mb-[10px]'>
                                                                        <span className='text-[#5885E9] mb-[10px] text-[12px]'>{sub.icon}</span>
                                                                        <h1 className='ml-[10px] text-[12px] md:text-[13px] -mt-[5px]'>{sub.text}</h1>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div>
                        <Swiper
                            pagination={{
                                type: "fraction",
                            }}
                            className="mySwiper lg:hidden md:flex-row justify-center "
                            // navigation={true}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            style={{
                                "--swiper-navigation-size" : "25px",
                            }}
                            modules={[Pagination, Navigation]}
                        >
                            {kelas.map((item, index) => {
                                return (
                                    <SwiperSlide>
                                        <div className='w-100 ml-[30px] mr-[20px] justify-center flex'>
                                            <div className='flex text-center justify-center' key={index}>
                                                <input
                                                    type="radio"
                                                    name='metode'
                                                    id={item.id2}
                                                    className='peer hidden'
                                                    value={item.title} />
                                                <label htmlFor={item.id2} className="border peer-checked:bg-[#F5F7FF] peer-checked:text-[#5885E9] hover:border-[#4D74CC] -ml-[2px] mx-[30px] rounded-xl peer-checked:border-[#5885E9]">
                                                    <span className='text-white hover:text-[white] hover:bg-[#4D74CC] rounded-full my-[50px] flex mx-auto w-fit p-5 text-[20px] bg-[#4D74CC]'>
                                                        {item.icon}</span>
                                                    <h1 className='font-Cairo font-bold text-[18px] md:text-[19px] mb-[20px]'>{item.title}</h1>
                                                    <h1 className='text-[12px] md:text-[13px] font-Cairo mx-[20px] text-[#727272] mb-[20px]'>{item.desc}</h1>
                                                    <hr className='mx-[30px] border-[#B1C4F0]' />
                                                    <div className='mx-[30px] mt-[30px]'>
                                                        {
                                                            item.benefit.map((sub: any, index: any) => {
                                                                return (
                                                                    <div key={index} className='flex flex-col text-[#494949] text-[14px]'>
                                                                        <div className='flex flex-row font-Cairo text-left mb-[10px]'>
                                                                            <span className='text-[#5885E9] mb-[10px] text-[12px]'>{sub.icon}</span>
                                                                            <h1 className='ml-[10px] text-[12px] md:text-[13px] -mt-[5px]'>{sub.text}</h1>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* <!-- Add Arrows --> */}
                            <div className="swiper-button-prev mr-[30px]"></div>
                            <div className="swiper-button-next ml-[30px]"></div>
                        </Swiper>
                    </div>

                    <div>
                        <h1 className='font-bold text-[14px] md:text-[16px] mt-[30px] font-Cairo'>Mata Kuliah</h1>
                        <div>
                            <div className='xl:flex hidden flex-row flex-wrap'>
                                {
                                    mataKuliah.map((item, index) => {
                                        return (
                                            <div className='-ml-[20px] flex mr-[30px] mt-[20px] flex-row' key={index}>
                                                <input
                                                    type="radio"
                                                    id={item.id}
                                                    onChange={(e) => setUserData({ ...userData, "matakuliah": e.target.value })}
                                                    value={item.title}
                                                    name="matakuliah"
                                                    className='peer mt-[20px] absolute ml-[30px]' />
                                                <label htmlFor={item.id} className='flex ml-[20px] hover:border-[#5885E9] w-[400px] pl-[40px] border rounded-2xl peer-checked:bg-[#F5F7FF] p-2 border-[#B0B1B0] peer-checked:border-[#5885E9] flex-col'>
                                                    <h1 className='text-[13px] text-[#151515] font-Cairo'>{item.title}</h1>
                                                    <h3 className='text-[11px] text-[#727272]'>{item.jumlah}</h3>
                                                </label>
                                            </div>
                                        )
                                    })
                                }
                                <div className='p-2 mt-[19px] z-50 '>
                                    <div className="relative z-1000">
                                        <div className="other z-1000">
                                            <input
                                                type="radio"
                                                id="matkulLain"
                                                onChange={(e) => setUserData({ ...userData, "matakuliah": e.target.value })}
                                                name='matakuliah'
                                                className='absolute peer mt-[7px] border-[#B0B1B0]' />
                                            <label htmlFor="matkulLain" className="-ml-[10px] font-Cairo text-[10px] md:text-[13px] pl-[30px] mr-[10px] peer-checked:bg-[#F5F7FF] bg-white rounded-2xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0]  p-2 peer-checked:text-[#5885E9] text-center">Lainnya</label>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    name="matakuliah"
                                    id="matkulLain"
                                    onChange={(e) => setUserData({ ...userData, "matakuliah": e.target.value })}
                                    className='-ml-[50px] placeholder:font-Cairo outline-none focus:ring-1 hover:border-[#5885E9] focus:ring-[#5885E9] text-[10px] md:text-[13px] rounded-2xl p-2 pl-10 pr-8 mt-[22px] border z-10'
                                    placeholder='Masukkan mata kuliah' />
                            </div>
                        </div>
                    </div>



                    <div className='mb-6 relative z-50 xl:hidden dropdown mt-[20px]'>
                        <label htmlFor='matakuliah' tabIndex={0} className='flex flex-col'>
                            <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                                <TiArrowSortedDown className='text-[#B0B1B0] text-[18px] mt-[10px]' />
                            </div>
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                <GiBookCover className='text-[#B0B1B0] text-[18px] mt-[10px]' />
                            </div>
                            <div tabIndex={0} className="dropdown-content overflow-y-scroll flex flex-row h-[200px] menu p-2 mt-[50px] shadow bg-base-100 rounded-box w-[350px]">
                                {
                                    mataKuliah.map((item, index) => {
                                        return (
                                            <div className='flex flex-row w-[300px]' key={index}>
                                                <input
                                                    type="radio"
                                                    name='matakuliah'
                                                    value={item.title}
                                                    id={item.id2}
                                                    className="hidden peer"
                                                    onChange={(e) => setUserData({ ...userData, "matakuliah": e.target.value })}
                                                />
                                                <label htmlFor={item.id2} className="my-[10px] text-[12px] md:text-[13px] font-Cairo py-[10px] px-[10px] rounded-xl w-full peer-checked:bg-[#F5F7FF]">{item.title}</label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </label>
                        <input
                            type="text"
                            name='matakuliah'
                            value={userData['matakuliah']}
                            onChange={(e) => setUserData({ ...userData, "matakuliah": e.target.value })}
                            id='matakuliah'
                            className='border w-[344px] placeholder:text-[14px] md:placeholder:text-[13px] lg:w-[500px] pl-[40px] text-[13px] mt-[10px] font-Cairo border-[#B0B1B0] rounded-2xl p-2'
                            required
                            placeholder='Pilih Mata Kuliah' />
                    </div>
                    <div className='flex -mt-[20px] xl:hidden flex-row'>
                        <div className='p-2 mt-[19px] z-40'>
                            <div className="relative z-1000">
                                <div className="other z-1000">
                                    <input
                                        type="radio"
                                        id="matkulLainMobile"
                                        onChange={(e) => setUserData({ ...userData, "matakuliah": e.target.value })}
                                        name='matakuliah'
                                        className='absolute peer mt-[7px] border-[#B0B1B0]' />
                                    <label htmlFor="matkulLainMobile" className="-ml-[10px] font-Cairo pl-[30px] mr-[10px] peer-checked:bg-[#F5F7FF] bg-white rounded-2xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0] p-2 peer-checked:text-[#5885E9] text-[13px] text-center">Lainnya</label>
                                </div>
                            </div>
                        </div>
                        <input
                            type="text"
                            name="matakuliah"
                            id="matkulLainMobile"
                            onChange={(e) => setUserData({ ...userData, "matakuliah": e.target.value })}
                            className='-ml-[50px] placeholder:font-Cairo outline-none focus:ring-1 hover:border-[#5885E9] focus:ring-[#5885E9] text-[13px] rounded-2xl p-2 pl-10 pr-8 mt-[22px] border z-10'
                            placeholder='Masukkan mata kuliah' />
                    </div>

                    <div>
                        <button className='ml-0 mr-auto block border-[#5885E9] font-Cairo rounded-xl my-[70px] px-5 text-[#5885E9] text-[16px] p-2 font-bold border' type='submit'>Pilih Materi</button>
                        <h1 className='font-bold mt-[30px] font-Cairo'>Materi</h1>
                        <h3 className='text-[14px] md:text-[16px] font-Cairo text-[#727272]'>Kultur Sel Untuk Teknik</h3>

                        <div className='grid sm:grid-cols-2 flex-wrap'>
                            {
                                materi.map((item, index) => {
                                    return (
                                        <div key={index} className='px-2 -ml-[20px] mr-[20px] mt-[20px]'>
                                            <input
                                                type="checkbox"
                                                onChange={(e) => setUserData({ ...userData, "materi": e.target.value })}
                                                value={item.title}
                                                id={item.id}
                                                name='materi'
                                                className='peer absolute mt-[17.5px] ml-[20px] border-[#B0B1B0]'
                                                required
                                            />
                                            <label htmlFor={item.id} className="ml-3 grid w-100 pl-[30px] peer-checked:bg-[#F5F7FF] rounded-xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0] p-3 peer-checked:text-[#5885E9] text-[13px]">
                                                {item.title}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <button type='submit' onClick={() => setStep(1)} className='mr-10 ml-auto block font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-[#5885E9] p-3 font-bold'>Kembali</button>
                        <button type='submit' onClick={() => setStep(3)} className='mr-0  block bg-[#5885E9] font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-white p-3 font-bold shadow-effect'>Berikutnya</button>
                    </div>
                </div>
            </form>
        </>
    )
}


