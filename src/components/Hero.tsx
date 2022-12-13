import { NextPage } from "next";
import Image from 'next/image';
import HeroIcons from "../assets/img/Group 69 1.png"

export default function Hero() {
    return ( 
        <>
            <div className="flex flex-col">
                <div className="flex lg:flex-row flex-wrap items-center lg:justify-between bg-[#F5F7FF]">
                    <h1 className="font-bold text-[46px] mx-[20px] mt-[50px] lg:ml-[100px] font-Rajdhani">Daftar Kelas</h1>
                    <Image src={HeroIcons} className="vsm:w-[200px] vsm:-mr-[200px] vsm:mt-[100px] vsm:h-[336px] lg:w-[565px] lg:h-[253.73px] desk:w-[815px] desk:h-[366px]" alt="Logo"></Image>
                </div>
            </div>
        </>
    );
}
