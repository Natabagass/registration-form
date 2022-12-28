import React, { useContext, useState } from 'react'
import { multiStepContext } from '../pages/StepContext'
import {BsFillPersonFill, BsCalendarRangeFill} from "react-icons/bs"
import {FaCoins, FaPen} from "react-icons/fa"
import { jam } from "../dummy-data";
import {IoTicket} from 'react-icons/io5'
// import Datepicker from 'flowbite-datepicker/Datepicker';

export default function FourthStep() {
    const {setStep, userData, setUserData, submitData} = useContext(multiStepContext)
    const count = 6;
    const arrayCounter = Array.from(Array(count).keys());
    const chooseCounter = userData.count;
    const [counterArrays, setCounterArrays] = useState(Array.from(Array(chooseCounter).keys()));
    

    return (
        <>
            <form>
                <div className='lg:mx-[100px] mx-[30px] mt-[50px]'>
                    <div className='flex flex-col'>
                        <h1 className='font-Rajdhani font-medium text-[22px]'>Pilih Sesi</h1>
                        <h3 className='font-Cairo text-[14px] text-[#727272]'>Pilih Jumlah Sesi yang akan diikuti</h3>
                        <h1 className='font-bold mt-[50px] text-[14px] font-Cairo'>Informasi Harga</h1>
                        <div className='flex justify-start'>
                            <div className='border flex flex-col w-[358px] border-[#B1C4F0] mt-[10px] rounded-xl'>
                                <div className='p-5'>
                                    <p className='text-[#5885E9] font-bold'>Rp. 260.000 <span className='font-normal text-[#A7A7A7]'>/sesi</span></p>
                                    <div className='flex flex-row'>
                                        <div className='flex flex-row mt-[5px] text-[16px] text-[#FFAE5F]'><BsFillPersonFill/><span className='-mt-[4px] text-[#727272] ml-[5px] text-[13px]'>1-5 orang</span></div>
                                        <div className='mx-auto flex justify-end w-[180px] -mt-[20px] text-[#B1C4F0] text-[31px]'><FaCoins/></div>
                                    </div>
                                </div>
                                <div className=' w-full h-[30px] px-5 font-Cairo rounded-bl-xl rounded-br-xl bg-[#F5F7FF]'>
                                    <p className='text-[#999999] mt-[5px] text-[13px]'>Lebih dari 5 orang dikenakan Rp 40.000/orang</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-[30px]'>
                            <h1 className=' text-[14px] font-bold font-Cairo'>Jumlah Sesi</h1>
                            <div>
                                {arrayCounter.map((item, index) => {
                                    return (
                                        <button key={index} onClick={(e) => {
                                            e.preventDefault()
                                            setUserData({...userData, "count" : item === 0 ? item + 1 : item + item});
                                            setCounterArrays(Array.from(Array(item === 0 ? item + 1 : item + item).keys()));
                                        }} 
                                        className='border px-5 py-3 rounded-xl hover:bg-[#F5F7FF] mt-[10px] active:bg-[#5885E9] active:text-white mr-3'>
                                            {item === 0 ? item + 1 : item + item}
                                        </button>
                                    )
                                })
                                }
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
                                            <div className='mb-6 relative'>
                                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                                    <BsCalendarRangeFill className='text-[#B0B1B0] text-[18px] mt-[10px]' />
                                                </div>
                                                <div className="relative">
                                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                                    </div>
                                                    <input type="date" className='border outline-none focus:ring-2  focus:text-[#3C64B1] focus:ring-[#3C64B1] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' />
                                                    {/* <input datepicker datepicker-buttons type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" /> */}
                                                </div>
                                            </div>
                                            
                                            <label className='font-bold text-[16px]'>Jam</label>
                                            <div className='mb-6 flex flex-row flex-wrap vsm:w-[344px]'>
                                            {
                                                jam.map((data, index)=> {
                                                    return(
                                                        <div key={index} className='p-2 -ml-[20px] mr-[20px] mt-[20px]'>
                                                            <input 
                                                                type="radio" 
                                                                onChange={(e) => setUserData({...userData, "jam" : e.target.value})} 
                                                                value= {data.label}
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
                            <div className="flex items-center mt-[30px] justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                                </div> 
                            </div>
                        </div>

                        <div className='mt-[50px]'>
                            <label className='font-bold text-[16px]'>Catatan Untuk Tutor</label>
                            <div className='mb-6 mt-[30px] relative'>
                                <div className='absolute inset-y-0 left-0 flex mt-[20px] pl-3 pointer-events-none'>
                                    <FaPen className='text-[#B0B1B0] text-[18px]'/>
                                </div>
                                <textarea 
                                    rows={4}
                                    onChange={(e) => setUserData({...userData, "catatanTutor" : e.target.value})} 
                                    value= {userData['catatanTutor']}
                                    name='catatanTutor' 
                                    className='border outline-none h-[200px] flex items-start focus:ring-2  focus:ring-[#3C64B1] w-[320px] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' 
                                    required 
                                    placeholder='Tuliskan masukkanmu disini'/>
                            </div>
                        </div>
                            <label className='font-bold text-[16px]'>Kode Referal</label>
                            <div className='mb-6 relative'>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <IoTicket className='text-[#B0B1B0] text-[18px] mt-[10px]'/>
                                </div>
                                <input 
                                    type="text" 
                                    onChange={(e) => setUserData({...userData, "kodeRef" : e.target.value})} 
                                    value= {userData['kodeRef']}
                                    name='kodeRef' 
                                    className='border outline-none focus:ring-2  focus:text-[#3C64B1] focus:ring-[#3C64B1] w-[320px] lg:w-[500px] pl-[40px] text-[13px] mt-[10px] border-[#B0B1B0] rounded-2xl p-2' 
                                    required 
                                    placeholder='Masukkan Kode Referal'/>
                            </div>
                        <div>

                        </div>

                    </div>
                    <div className='flex flex-row'>
                        <button type='submit' onClick={()=>setStep(3)} className='mr-10 ml-auto block font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-[#5885E9] p-3 font-bold'>Kembali</button>
                        <button type='submit' onClick={()=>setStep(5)} className='mr-0  block bg-[#5885E9] font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-white p-3 font-bold shadow-effect'>Berikutnya</button>
                    </div>
                </div>
            </form>
        </>
    )
}
