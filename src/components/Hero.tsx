import { NextPage } from "next";
import Image from 'next/image';
import HeroIcons from "../assets/img/Group 68 1.png"

export default function Hero() {
    return ( 
        <>
            <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between bg-[#F3F6FA]">
                    <h1 className="font-bold text-[46px] lg:ml-[100px] font-Rajdhani">Daftar Kelas</h1>
                    <Image src={HeroIcons} height={250} alt="Logo"></Image>
                </div>
            </div>
        </>
    );
}
