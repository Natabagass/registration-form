import React, { useContext } from 'react'
import icon2 from "../assets/img/Vector.png"
import { SvgIcon } from '@mui/material';
import { kelas, kelasPerkuliahan, mataKuliah, materi } from "../dummy-data";
import { multiStepContext } from '../pages/StepContext';
import {BsPeopleFill, BsFillFileEarmarkTextFill} from 'react-icons/bs'
import {HiPencilAlt} from 'react-icons/hi'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../pages/_app";
import { Pagination } from "swiper";

export default function SecondStep() {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: any) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    const { setStep, userData, setUserData } = useContext(multiStepContext)
    return (
        <>
            <form>
                <div className='lg:mx-[100px] mx-[30px] mt-[50px] w-[444px] lg:w-[850px] xl:w-[1320px]'>
                    <h1 className='text-[22px] font-medium font-Rajdhani'>Kelas Pilihan</h1>
                    <h3 className='xl:text-[16px] vsm:text-[12px] lg:text-[14px] font-Cairo lg:leading-[26px] leading-[24px] text-[#727272]'>Pilih salah satu metode pembelajaran dan mata kuliah (kursus) serta materi yang ingin kamu pelajari atau diskusikan. Khusus <span className='font-bold'>Kelas Konsultasi</span> dan <span className='font-bold'>Kelas Persiapan Ujian</span>, jika jumlah materi yang dipilih melebihi batas yang ditentukan, maka Torche Education berhak untuk mengeliminasi materi sesuai dengan batas yang ditentukan. Sebagai contoh: Jika kalian memilih 3 materi (misalkan A, B, C) namun hanya ingin 1 pertemuan, maka Torche Education berhak mengeliminasi 1 materi. </h3>

                    <div>
                        <h1 className='font-bold mt-[30px] font-Cairo'>Metode Pembelajaran</h1>
                        <div className='flex-col md:flex-row hidden lg:flex'>
                            {
                                kelas.map((item, index) => {
                                    return (
                                        <div className='flex text-center mt-[20px]' key={index}>
                                            <input
                                                type="radio"
                                                name='metode'
                                                id={item.id}
                                                className='peer hidden'
                                                value={item.title} />
                                            <label htmlFor={item.id} className="border peer-checked:bg-[#F5F7FF] peer-checked:text-[#5885E9] hover:border-[#4D74CC] -ml-[2px] mx-[30px] rounded-xl peer-checked:border-[#5885E9]">
                                                <span className='text-[#5885E9] hover:text-[white] hover:bg-[#4D74CC] rounded-full my-[50px] flex mx-auto w-fit p-5 text-[20px] bg-[#F5F7FF]'>
                                                    {item.icon}</span>
                                                <h1 className='font-Cairo font-bold text-[19px] mb-[20px]'>{item.title}</h1>
                                                <h1 className='text-[14px] font-Cairo mx-[20px] text-[#727272] mb-[20px]'>{item.desc}</h1>
                                                <hr className='mx-[30px] border-[#B1C4F0]' />
                                                <div className='mx-[30px] mt-[30px]'>
                                                    {
                                                        item.benefit.map((sub: any, index) => {
                                                            return (
                                                                <div key={index} className='flex flex-col text-[#494949] text-[14px]'>
                                                                    <div className='flex flex-row font-Cairo text-left mb-[10px]'>
                                                                        <span className='text-[#5885E9] mb-[10px] text-[12px]'>{sub.icon}</span>
                                                                        <h1 className='ml-[10px] -mt-[5px]'>{sub.text}</h1>
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

                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper lg:hidden"
                    >
                        <SwiperSlide>
                            <div className='flex text-center mt-[20px]'>
                                <input
                                    type="radio"
                                    name='metode'
                                    id='kelasPerkuliahan'
                                    className='peer hidden'
                                    value='Kelas Perkuliahan' />
                                <label htmlFor='kelasPerkuliahan' className="border peer-checked:bg-[#F5F7FF] peer-checked:text-[#5885E9] hover:border-[#4D74CC] -ml-[2px] mx-[30px] rounded-xl peer-checked:border-[#5885E9]">
                                    <span className='text-[#5885E9] hover:text-[white] hover:bg-[#4D74CC] rounded-full my-[50px] flex mx-auto w-fit p-5 text-[20px] bg-[#F5F7FF]'>
                                        <BsPeopleFill/></span>
                                    <h1 className='font-Cairo font-bold text-[19px] mb-[20px]'>Kelas Perkuliahan</h1>
                                    <h1 className='text-[14px] font-Cairo mx-[20px] text-[#727272] mb-[20px]'>Kelas perkuliahan adalah dimana tutor melakukan presentasi yang komprehensif tentang materi pelajaran yang dipilih oleh siswa. Kami merekomendasikan kelas ini untuk siswa yang ingin meninjau dan memperdalam pemahaman mereka.</h1>
                                    <hr className='mx-[30px] border-[#B1C4F0]' />
                                    <div className='mx-[30px] mt-[30px]'>
                                        {
                                            kelasPerkuliahan.map((sub: any, index) => {
                                                return (
                                                    <div key={index} className='flex flex-col text-[#494949] text-[14px]'>
                                                        <div className='flex flex-row font-Cairo text-left mb-[10px]'>
                                                            <span className='text-[#5885E9] mb-[10px] text-[12px]'>{sub.icon}</span>
                                                            <h1 className='ml-[10px] -mt-[5px]'>{sub.text}</h1>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </label>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className='flex text-center mt-[20px]'>
                                <input
                                    type="radio"
                                    name='metode'
                                    id='kelasKonsultasi'
                                    className='peer hidden'
                                    value='Kelas Konsultasi' />
                                <label htmlFor='kelasKonsultasi' className="border peer-checked:bg-[#F5F7FF] peer-checked:text-[#5885E9] hover:border-[#4D74CC] -ml-[2px] mx-[30px] rounded-xl peer-checked:border-[#5885E9]">
                                    <span className='text-[#5885E9] hover:text-[white] hover:bg-[#4D74CC] rounded-full my-[50px] flex mx-auto w-fit p-5 text-[20px] bg-[#F5F7FF]'>
                                        <HiPencilAlt/></span>
                                    <h1 className='font-Cairo font-bold text-[19px] mb-[20px]'>Kelas Konsultasi</h1>
                                    <h1 className='text-[14px] font-Cairo mx-[20px] text-[#727272] mb-[20px]'>Diskusi terbuka dan kelas di mana siswa dapat bertanya atau berkonsultasi terkait materi pelajaran yang dipilih. Direkomendasikan bagi siswa yang mengerjakan tugas proyek. Para siswa juga didorong untuk memiliki pemahaman dasar dengan materi.</h1>
                                    <hr className='mx-[30px] border-[#B1C4F0]' />
                                    <div className='mx-[30px] mt-[30px]'>
                                        {
                                            kelasPerkuliahan.map((sub: any, index) => {
                                                return (
                                                    <div key={index} className='flex flex-col text-[#494949] text-[14px]'>
                                                        <div className='flex flex-row font-Cairo text-left mb-[10px]'>
                                                            <span className='text-[#5885E9] mb-[10px] text-[12px]'>{sub.icon}</span>
                                                            <h1 className='ml-[10px] -mt-[5px]'>{sub.text}</h1>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </label>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className='flex text-center mt-[20px]'>
                                <input
                                    type="radio"
                                    name='metode'
                                    id='kelasPersiapanUjian'
                                    className='peer hidden'
                                    value='Kelas Persiapan Ujian' />
                                <label htmlFor='kelasPersiapanUjian' className="border peer-checked:bg-[#F5F7FF] peer-checked:text-[#5885E9] hover:border-[#4D74CC] -ml-[2px] mx-[30px] rounded-xl peer-checked:border-[#5885E9]">
                                    <span className='text-[#5885E9] hover:text-[white] hover:bg-[#4D74CC] rounded-full my-[50px] flex mx-auto w-fit p-5 text-[20px] bg-[#F5F7FF]'>
                                        <BsFillFileEarmarkTextFill/></span>
                                    <h1 className='font-Cairo font-bold text-[19px] mb-[20px]'>Kelas Persiapan Ujian</h1>
                                    <h1 className='text-[14px] font-Cairo mx-[20px] text-[#727272] mb-[20px]'>Kelas ini dirancang bagi siswa untuk melakukan tinjauan singkat dan praktik terkait dengan materi pelajaran yang dipilih. Kami merekomendasikan kelas ini untuk siswa yang memiliki jadwal padat dan sudah memiliki pemahaman dasar tentang materi.</h1>
                                    <hr className='mx-[30px] border-[#B1C4F0]' />
                                    <div className='mx-[30px] mt-[30px]'>
                                        {
                                            kelasPerkuliahan.map((sub: any, index) => {
                                                return (
                                                    <div key={index} className='flex flex-col text-[#494949] text-[14px]'>
                                                        <div className='flex flex-row font-Cairo text-left mb-[10px]'>
                                                            <span className='text-[#5885E9] mb-[10px] text-[12px]'>{sub.icon}</span>
                                                            <h1 className='ml-[10px] -mt-[5px]'>{sub.text}</h1>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </label>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                    <div>
                        <h1 className='font-bold mt-[30px] font-Cairo'>Mata Kuliah</h1>
                        <div>
                            <div className='flex flex-row flex-wrap'>
                                {
                                    mataKuliah.map((item, index) => {
                                        return (
                                            <div className='-ml-[20px] mr-[30px] mt-[20px] flex-row flex' key={index}>
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
                                            <label htmlFor="matkulLain" className="-ml-[10px] font-Cairo lg: pl-[30px] mr-[10px] peer-checked:bg-[#F5F7FF] bg-white rounded-2xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0] p-2 peer-checked:text-[#5885E9] text-[13px] text-center">Lainnya</label>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    name="matakuliah"
                                    id="matkulLain"
                                    onChange={(e) => setUserData({ ...userData, "matakuliah": e.target.value })}
                                    className='-ml-[50px] placeholder:font-Cairo outline-none focus:ring-1 hover:border-[#5885E9] focus:ring-[#5885E9] text-[13px] rounded-2xl p-2 pl-10 pr-8 mt-[20px] border z-10'
                                    placeholder='Masukkan mata kuliah' />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className='ml-0 mr-auto block border-[#5885E9] font-Cairo rounded-xl my-[70px] px-5 text-[#5885E9] text-[16px] p-2 font-bold border' type='submit'>Pilih Materi</button>
                        <h1 className='font-bold mt-[30px] font-Cairo'>Materi</h1>
                        <h3 className='text-[19px] font-Cairo text-[#727272]'>Kultur Sel Untuk Teknik</h3>

                        <div className='grid grid-cols-2 flex-wrap'>
                            {
                                materi.map((item, index) => {
                                    return (
                                        <div key={index} className='p-2 -ml-[20px] mr-[20px] mt-[20px]'>
                                            <input
                                                type="checkbox"
                                                onChange={(e) => setUserData({ ...userData, "sosmed": e.target.value })}
                                                value={item.title}
                                                id={item.id}
                                                name='sosmed'
                                                className='peer absolute mt-[12px] ml-[20px] border-[#B0B1B0]'
                                                required
                                            />
                                            <label htmlFor={item.id} className="ml-3 grid grid-cols-2 w-[200px] lg:w-[600px] pl-[30px] peer-checked:bg-[#F5F7FF]  rounded-2xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0] p-2 peer-checked:text-[#5885E9] text-[13px]">
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
