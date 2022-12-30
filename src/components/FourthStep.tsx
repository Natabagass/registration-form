import React, { useContext, useRef, useState } from 'react'
import { multiStepContext } from '../pages/StepContext'
import { BsFillPersonFill, BsCalendarRangeFill } from "react-icons/bs"
import { FaCoins, FaPen } from "react-icons/fa"
import { jam } from "../dummy-data";
import { IoTicket } from 'react-icons/io5';
// import Datepicker from 'flowbite-datepicker/Datepicker'
import CurrencyFormat from 'react-currency-format';


export default function FourthStep() {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext)
    const [price, setPrice] = useState(0);
    const count = 6;
    const arrayCounter = Array.from(Array(count).keys());
    const chooseCounter = userData.count;
    const [counterArrays, setCounterArrays] = useState(Array.from(Array(chooseCounter).keys()));


    return (
        <>
            <form>

                <div className='lg:mx-[100px] mx-[30px] mt-[50px]'>
                    <div className='flex flex-col'>
                        <h1 className='font-Rajdhani font-medium lg:text-[28px] xl:text-[28px] text-[22px]'>Pilih Sesi</h1>
                        <h3 className='font-Cairo text-[14px] lg:text-[16px] text-[#727272]'>Pilih Jumlah Sesi yang akan diikuti</h3>
                        <h1 className='font-bold mt-[50px] text-[14px] md:text-[16px] font-Cairo'>Informasi Harga</h1>
                        <div className='flex flex-col md:flex-row justify-start'>
                                <div className='border flex flex-col w-[300px] border-[#B1C4F0] mt-[10px] rounded-xl'>
                                    <div className='p-5'>
                                        <div className='text-[#5885E9] font-bold'>Rp. {price} <span className='font-normal text-[#A7A7A7]'>/sesi</span></div>
                                        <div className='flex flex-row'>
                                            <div className='flex flex-row mt-[5px] text-[16px] text-[#FFAE5F]'><BsFillPersonFill /><span className='-mt-[4px] text-[#727272] ml-[5px] text-[13px]'>1-5 orang</span></div>
                                            <div className='mx-auto flex justify-end w-[180px] -mt-[20px] text-[#B1C4F0] text-[31px]'><FaCoins /></div>
                                        </div>
                                    </div>
                                    <div className=' w-full h-[30px] px-5 font-Cairo rounded-bl-xl rounded-br-xl bg-[#F5F7FF]'>
                                        <p className='text-[#999999] mt-[5px] text-[13px]'>Lebih dari 5 orang dikenakan Rp 40.000/orang</p>
                                    </div>
                                </div>

                            <div className='mt-[40px] md:ml-[100px] md:-mt-[20px] flex flex-col'>
                                <h1 className='text-[14px] font-bold font-Cairo md:text-[16px]'>Jumlah Sesi</h1>
                                <div className='grid grid-cols-3'>
                                    {arrayCounter.map((item, index) => {
                                        return (
                                            <button key={index} onClick={(e) => {
                                                e.preventDefault()
                                                setUserData({ ...userData, "count": item === 0 ? item + 1 : item + item });
                                                setCounterArrays(Array.from(Array(item === 0 ? item + 1 : item + item).keys()));
                                                setPrice(item === 0 ? (item + 1) * 260000 :
                                                item < 3 ? (item + item) * 260000 : (item + item) * 300000)
                                            }}
                                            className='border px-5 py-3 rounded-xl hover:bg-[#F5F7FF] mt-[10px] active:bg-[#5885E9] active:text-white mr-3'>
                                                {item === 0 ? item + 1 : item + item}
                                            </button>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-[22px] lg:text-[28px] mt-[80px] font-medium font-Rajdhani'>Pilih Jadwal</h1>
                            <h3 className='xl:text-[16px] text-[12px] lg:text-[14px] font-Cairo lg:leading-[26px] leading-[24px] text-[#727272]'>Pilih tanggal serta jam sesi yang akan dilaksanakan. Jadwal yang dipilih belum tentu akan sesuai karena kami harus mencocokkan dengan jadwal tutor yang tersedia, namun kami akan mengusahakan supaya jadwal yang kalian inginkan terealisasi. Jika terdapat perubahan, tim kami akan segera menghubungimu.</h3>

                            <div className='grid grid-cols-12'>
                                {chooseCounter > 0 && chooseCounter <= 10 ? (
                                    counterArrays.map((item, index) => {
                                        return (
                                            <div key={index} className="lg:col-span-4 md:col-span-6 col-span-12 mt-10 md:pr-10">
                                                <h6 className='font-bold text-[23px] mb-4'>Sesi {item + 1}</h6>

                                                <label className='font-bold text-[16px]'>Tanggal</label>
                                                <div className="relative my-[30px]">
                                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                        <svg aria-hidden="true" className="w-5 h-5 focus:text-[#5885E9] text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                                    </div>
                                                    <input
                                                        type="date"
                                                        id="tanggal"
                                                        onFocus={(e) => (e.target.type = "date")}
                                                        onBlur={(e) => (e.target.type = "text")}
                                                        className=" font-Cairo border botder-[#A7ABB8] p-3 rounded-2xl text-[13px] placeholder:text-[#727272] outline-none focus:border-[#5885E9] block w-full pl-10   "
                                                        placeholder="Pilih Tanggal" />
                                                </div>

                                                <label className='font-bold text-[16px]'>Jam</label>
                                                <div className='mb-6 flex flex-row flex-wrap vsm:w-[344px]'>
                                                    {
                                                        jam.map((data, index) => {
                                                            return (
                                                                <div key={index} className='p-2 -ml-[20px] mr-[20px] mt-[20px]'>
                                                                    <input
                                                                        type="radio"
                                                                        onChange={(e) => setUserData({ ...userData, "jam": e.target.value })}
                                                                        value={data.label}
                                                                        id={data.id}
                                                                        name='jam'
                                                                        className='peer absolute mt-[7px] ml-[20px] border-[#B0B1B0]'
                                                                        required
                                                                    />
                                                                    <label htmlFor={data.id} className="ml-3 pl-[30px] peer-checked:bg-[#F5F7FF]  rounded-2xl border peer-checked:border-[#5885E9] hover:border-[#5885E9] border-[#B0B1B0] p-2 peer-checked:text-[#5885E9] text-[13px]">
                                                                        {data.label}</label>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }))
                                    : null}
                            </div>

                            <button type='submit' onClick={submitData} className='mr-10 font-Cairo rounded-xl mt-[30px] mb-[50px] hover:text-white hover:shadow-xl  hover:bg-[#3C64B1] border border-[#3C64B1] px-5 text-[#3C64B1] p-3 font-bold'>Simpan Jadwal</button>
                            <div className='mt-[30px] text-[16px]'>
                                <h1>Mohon lampirkan File terkait Project atau Tugas yang akan dibahas.</h1>
                                <div className='my-[20px] font-Cairo'>
                                    <h1 className='font-bold'>Kelas Perkuliahan</h1>
                                    <h3 className='mt-[5px]'>Bagi yang memilih Kelas Perkuliahan, bagian ini tidak perlu diisi.</h3>
                                </div>
                                <div className='my-[20px] font-Cairo'>
                                    <h1 className='font-bold'>Kelas Konsultasi</h1>
                                    <h3 className='mt-[5px] flex flex-col'>Kelas Konsultasi Untuk memudahkan kami dalam mencarikan Tutor yang sesuai mohon bantuannya untuk melampirkan File berikut:
                                        <span className='ml-[10px]'>1. File terkait Project atau Tugas yang akan didiskusikan</span>
                                        <span className='ml-[10px]'>2. Daftar pertanyaan atau hal-hal yang akan dibahas</span></h3>
                                </div>
                                <div className='my-[20px] font-Cairo'>
                                    <h1 className='font-bold'>Kelas Persiapan Ujian</h1>
                                    <h3 className='mt-[5px] flex flex-col'>Jika kalian sudah memiliki soal-soal yang ingin dibahas, mohon pastikan materinya sudah sesuai dengan materi yang kalian pilih di halaman sebelumnya. Jika jumlah soal yang dibahas cukup banyak, Tutor berhak untuk menentukan soal mana saja yang akan dibahas mengingat keterbatasan waktu dalam satu sesi. Jika kalian belum memiliki soal-soal yang ingin dibahas, Tutor kami akan membantu menyediakan soal-soal untuk latihan bersama di Kelas Persiapan Ujian.</h3>
                                </div>
                            </div>

                            <div className='mt-[50px] '>
                                <label className='font-bold text-[16px]'>Upload File Tugas</label>
                                <div className="flex items-center mt-[30px] justify-start w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col border-[#B1C4F0] items-center justify-center w-[300px] h-[400px] border-[8px] border-dashed rounded-lg cursor-pointer ">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[70px] h-[84px] text-[#5885E9]"><path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" /><path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" /></svg>
                                            <p className="mb-2 text-[23px] font-Cairo text-[#A7A7A7] mt-[20px]">Drop file tugasmu disini</p>
                                            <p className='text-[19px] text-[#A7A7A7] font-Cairo'>atau</p>
                                            <p className="text-[#5885E9] mt-[25px] font-bold border-2 border-[#5885E9] rounded-xl px-5 py-3">Pilih File</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='mt-[50px]'>
                            <label className='font-bold text-[16px]'>Catatan Untuk Tutor</label>
                            <div className='mb-6 mt-[30px] relative'>
                                <div className='absolute inset-y-0 left-0 flex mt-[10px] pl-3 pointer-events-none'>
                                    <FaPen className='text-[#B0B1B0] text-[18px]' />
                                </div>
                                <textarea
                                    rows={4}
                                    onChange={(e) => setUserData({ ...userData, "catatanTutor": e.target.value })}
                                    value={userData['catatanTutor']}
                                    name='catatanTutor'
                                    className='border outline-none h-[200px] flex items-start focus:ring-2  hover:border-[#4D74CC] focus:border-[#5885E9] w-full pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2'
                                    required
                                    placeholder='Tuliskan masukkanmu disini' />
                            </div>
                        </div>
                        <label className='font-bold text-[16px]'>Kode Referal</label>
                        <div className='mb-6 relative'>
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                <IoTicket className='text-[#B0B1B0] text-[18px] mt-[10px]' />
                            </div>
                            <input
                                type="text"
                                onChange={(e) => setUserData({ ...userData, "kodeRef": e.target.value })}
                                value={userData['kodeRef']}
                                name='kodeRef'
                                className='border outline-none hover:border-[#4D74CC] focus:border-[#5885E9] w-[320px] lg:w-[500px] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2'
                                required
                                placeholder='Masukkan Kode Referal' />
                        </div>
                        <div>

                        </div>

                    </div>
                    <div className='flex flex-row'>
                        <button type='submit' onClick={() => setStep(3)} className='mr-10 ml-auto block font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-[#5885E9] p-3 font-bold'>Kembali</button>
                        <button type='submit' onClick={submitData} className='mr-0  block bg-[#5885E9] font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-white p-3 font-bold shadow-effect'>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}
