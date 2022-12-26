import React from 'react'
import icon2 from "../assets/img/Vector.png"
import { SvgIcon } from '@mui/material';
import { kelas, mataKuliah, materi } from "../dummy-data";

export default function SecondStep() {
    return (
        <>
            <form>
                <div className='lg:mx-[100px] mx-[30px] mt-[50px] w-[444px] lg:w-[850px] xl:w-[1320px]'>
                    <h1 className='text-[22px] font-medium font-Rajdhani'>Kelas Pilihan</h1>
                    <h3 className='xl:text-[16px] vsm:text-[12px] lg:text-[14px] font-Cairo lg:leading-[26px] leading-[24px] text-[#727272]'>Pilih salah satu metode pembelajaran dan mata kuliah (kursus) serta materi yang ingin kamu pelajari atau diskusikan. Khusus <span className='font-bold'>Kelas Konsultasi</span> dan <span className='font-bold'>Kelas Persiapan Ujian</span>, jika jumlah materi yang dipilih melebihi batas yang ditentukan, maka Torche Education berhak untuk mengeliminasi materi sesuai dengan batas yang ditentukan. Sebagai contoh: Jika kalian memilih 3 materi (misalkan A, B, C) namun hanya ingin 1 pertemuan, maka Torche Education berhak mengeliminasi 1 materi. </h3>

                    <div>
                        <h1 className='font-bold mt-[30px] font-Cairo'>Metode Pembelajaran</h1>
                        <div>
                            <div className='flex flex-col lg:flex-row '>
                                {
                                    kelas.map((item, index) => {
                                        return(
                                            <div className='border hover:border-[#4D74CC]  border-[#A7ABB8] mx-[30px] -ml-[2px] rounded-xl text-center mt-[20px]' key={index}>
                                                <div className=''>
                                                    <input type="radio" name='metode' id='metodePembelajaran' className='checked:bg-[#5885E9] checked:text-white' value={item.desc} />
                                                    <label htmlFor="metodePembelajaran">
                                                        <div className=''>
                                                            <span className='text-[#5885E9] rounded-full my-[50px] flex mx-auto w-fit hover:bg-[#5885E9] hover:text-white p-5 text-[20px]  bg-[#F5F7FF]'>{item.icon}</span>
                                                            <h1 className='font-Cairo font-bold text-[19px] mb-[20px]'>{item.title}</h1>
                                                            <h3 className='text-[14px] font-Cairo mx-[20px] text-[#727272] mb-[20px]'>{item.desc}</h3>
                                                            <hr className='mx-[30px] border-[#B1C4F0]'/>
                                                            <div className='mx-[30px] mt-[30px]'>
                                                            {
                                                                item.benefit.map((sub:any) => {
                                                                    return(
                                                                        <div className='flex flex-col text-[#494949] text-[14px]'>
                                                                            <div className='flex flex-row font-Cairo text-left mb-[10px]'>
                                                                                <span className='text-[#5885E9] mb-[10px] text-[12px]'>{sub.icon}</span>
                                                                                <h1 className='ml-[10px] -mt-[5px]'>{sub.text}</h1>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h1 className='font-bold mt-[30px] font-Cairo'>Mata Kuliah</h1>
                        <div>
                            <div className='flex flex-row flex-wrap'>
                                {
                                    mataKuliah.map((item, index)=> {
                                        return(
                                            <div className='border border-[#B0B1B0] w-[307px]  mr-[20px] rounded-2xl p-2 mt-[20px] flex-row flex' key={index}>
                                                <input type="radio" name="matakuliah" className='ml-[20px]' />
                                                <div className='flex ml-[20px] flex-col'>
                                                    <h1 className='text-[13px] text-[#151515] font-Cairo'>{item.title}</h1>
                                                    <h3 className='text-[11px] text-[#727272]'>{item.jumlah}</h3>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                    <div className='border border-[#B0B1B0] mr-[20px] rounded-2xl p-2 mt-[20px] z-50 bg-white'>
                                        <div className="relative z-1000">
                                            <div className="other z-1000">
                                                <input type="radio" id="lainnya" name='matakuliah' className='relative z-50' />
                                                <label htmlFor="lainnya" className="ml-3 text-[13px] text-center font-Cairo">Lainnya</label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                <input type="text" name="matakuliah" id="lainnya" className='-ml-[50px] font-Cairo mr-[20px] rounded-2xl text-[13px] p-2 pl-10 mt-[20px] border z-10' placeholder='Masukkan mata kuliah'/>                        </div>
                        </div>
                    </div>

                    <div>
                        <button className='ml-0 mr-auto block border-[#5885E9] font-Cairo rounded-xl my-[70px] px-5 text-[#5885E9] text-[16px] p-2 font-bold border' type='submit'>Pilih Materi</button>
                        <h1 className='font-bold mt-[30px] font-Cairo'>Materi</h1>
                        <h3 className='text-[19px] font-Cairo text-[#727272]'>Kultur Sel Untuk Teknik</h3>

                        <div className='flex flex-row'>
                            {
                                materi.map((item, index)=> {
                                    return(
                                        <div key={index} className='border border-[#B0B1B0] w-[700px] flex-wrap mr-[5px] lg:mr-[30px] rounded-2xl p-2 mt-[20px]'>
                                            <input type="radio"  name='materi' className='border text-[13px] border-[#B0B1B0] rounded-2xl p-2' />
                                            <label className="ml-3 text-center text-[13px] font-Cairo">{item.title}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <button type='submit' className='mr-10 ml-auto block font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-[#5885E9] p-3 font-bold'>Kembali</button>
                        <button type='submit' className='mr-0  block bg-[#5885E9] font-Cairo rounded-xl mt-[100px] mb-[50px] px-5 text-white p-3 font-bold shadow-effect'>Berikutnya</button>
                    </div>
                </div>
            </form>
        </>
    )
}
