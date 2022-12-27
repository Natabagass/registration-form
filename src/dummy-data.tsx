import { BsPeopleFill, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { FaRegSadTear, FaRegGrinHearts, FaRegSmileBeam, FaRegMeh, FaRegTired, FaSadTear } from "react-icons/fa"
import React from 'react'

export const studi = [
    {
        label: "S1 Teknik Kimia",
        id: "pil1"
    },
    {
        label: "S1 Teknologi Bioproses",
        id: "pil2"
    },
    {
        label: "S2 Teknik Kimia",
        id: "pil3"
    },
    {
        label: "S3 Teknik Kimia",
        id: "pil4"
    },
]

export const rating = [
    {
        label: 'Sulit Banget',
        icon: <FaRegTired/>
    },
    {
        label: 'Agak Sulit',
        icon: <FaRegSadTear/>
    },
    {
        label: 'Lumayan',
        icon: <FaRegMeh/>
    },
    {
        label: 'Mudah',
        icon: <FaRegSmileBeam/>
    },
    {
        label: 'Mudah Banget',
        icon: <FaRegGrinHearts/>
    }
]

export const univ = [
    {
        label: "Universitas Indonesia",
        id: "pil1"
    },
    {
        label: "Institut Teknologi Bandung",
        id: "pil2"
    },
    {
        label: "Institut Teknologi Sepuluh November",
        id: "pil3"
    },        
    {
        label: "Universitas Sriwijaya",
        id: "pil4"
    },        
    {
        label: "Universitas Muhammadiyah Surakarta",
        id: "pil5"
    },
]

export const sosmed = [
    {
        label: "Instagram",
        id: "pil1"
    },
    {
        label: "Facebook",
        id: "pil2"
    },
    {
        label: "Tiktok",
        id: "pil3"
    },        
    {
        label: "Linkedin",
        id: "pil4"
    },        
    {
        label: "Line",
        id: "pil5"
    },
    {
        label: "Teman atau Keluarga",
        id: "pil6"
    },
]

export const kelas = [
    {
        icon: <BsPeopleFill/>,
        title: 'Kelas Perkuliahan',
        desc: 'Kelas perkuliahan adalah dimana tutor melakukan presentasi yang komprehensif tentang materi pelajaran yang dipilih oleh siswa. Kami merekomendasikan kelas ini untuk siswa yang ingin meninjau dan memperdalam pemahaman mereka.',
        benefit:[
            {
                icon: <AiFillCheckCircle />,
                text:'Live Tutoring di Google Meet (100 menit/sesi)'
            },
            {
                icon: <AiFillCheckCircle />,
                text:'1 Sesi sama dengan 1 Materi'
            },
            {
                icon: <AiFillCheckCircle />,
                text:'Materi yang dipilih harus mengikuti Panduan Kurikulum'
            },
            {
                icon: <AiFillCheckCircle />,
                text: 'Materi presentasi disediakan'
            },
            {
                icon: <AiFillCheckCircle />,
                text: 'Rekaman Google Meet disediakan'
            },
            {
                icon: <AiFillCheckCircle />,
                text: 'Konsultasi gratis di grup Discord'
            }
        ] 
    },
    {
        icon: <HiPencilAlt/>,
        title: 'Kelas Konsultasi',
        desc: 'Diskusi terbuka dan kelas di mana siswa dapat bertanya atau berkonsultasi terkait materi pelajaran yang dipilih. Direkomendasikan bagi siswa yang mengerjakan tugas proyek. Para siswa juga didorong untuk memiliki pemahaman dasar dengan materi.',
        benefit:[
            {
                icon: <AiFillCheckCircle />,
                text:'Live Tutoring di Google Meet (100 menit/sesi)'
            },
            {
                icon: <AiFillCheckCircle />,
                text:'1 sesi sama dengan 2 Materi'
            },
            {
                icon: <AiFillCheckCircle />,
                text:'Materi yang dipilih harus mengikuti Panduan Kurikulum'
            },
            {
                icon: <AiFillCheckCircle />,
                text: 'Materi presentasi disediakan'
            },
            {
                icon: <AiFillCheckCircle />,
                text: 'Rekaman Google Meet disediakan'
            },
            {
                icon: <AiFillCheckCircle />,
                text: 'Konsultasi gratis di grup Discord'
            }
        ] 
    },
    {
        icon: <BsFillFileEarmarkTextFill/>,
        title: 'Kelas Persiapan Ujian',
        desc: 'Kelas ini dirancang bagi siswa untuk melakukan tinjauan singkat dan praktik terkait dengan materi pelajaran yang dipilih. Kami merekomendasikan kelas ini untuk siswa yang memiliki jadwal padat dan sudah memiliki pemahaman dasar tentang materi.',
        benefit:[
            {
                icon: <AiFillCheckCircle />,
                text:'Live Tutoring di Google Meet (100 menit/sesi)'
            },
            {
                icon: <AiFillCheckCircle />,
                text:'1 Sesi sama dengan 2 Materi'
            },
            {
                icon: <AiFillCheckCircle />,
                text:'Materi yang dipilih harus mengikuti Panduan Kurikulum'
            },
            {
                icon: <AiFillCheckCircle />,
                text: 'Materi presentasi disediakan'
            },
            {
                icon: <AiFillCheckCircle />,
                text: 'Rekaman Google Meet disediakan'
            },
            {
                icon: <AiFillCheckCircle />,
                text: 'Konsultasi gratis di grup Discord'
            }
        ] 
    }
]

export const mataKuliah = [
    {
        id: 1,
        title: 'Dasar-Dasar Kimia Analitik',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 2,
        title: 'Dasar-Dasar Perpindahan Massa',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 3,
        title: 'Dasar-Dasar Perpindahan Panas',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 4,
        title: 'Desain Pabrik Proses',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 5,
        title: 'Desain Peralatan Proses',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 6,
        title: 'Desain Produk dan Pengembangan',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 7,
        title: 'Ekonomi Teknik',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 8,
        title: 'Fenomena Transportasi',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 9,
        title: 'Fisika Dasar 1',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 10,
        title: 'Fisika Dasar 2',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 11,
        title: 'Kalkulus Dasar',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 12,
        title: 'Kimia Dasar',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 13,
        title: 'Kimia Fisik',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 14,
        title: 'Kimia Organik Untuk Teknik',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 15,
        title: 'Komputasi Numerik Untuk Teknik',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 16,
        title: 'Kultur Sel Untuk Teknik',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 17,
        title: 'Matematika Teknik Kimia',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 18,
        title: 'Mekanika Fluida dan Partikel',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 19,
        title: 'Neraca Massa dan Energi',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 20,
        title: 'Proses Kontrol dan Dinamika',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 21,
        title: 'Simulasi Proses Kimia',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 22,
        title: 'Statistik dan Probalitas',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 23,
        title: 'Teknik Reaksi Kimia',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: 24,
        title: 'Termodinamika Teknik Kimia',
        jumlah: 'Tersedia 4 materi'
    }
]

export const materi = [
    {
        id: 1,
        title: 'Kultur Jaringan'
    },
    {
        id: 2,
        title: 'Kultur Sel Hewan'
    },
    {
        id: 3,
        title: 'Kontaminasi Kultur Sel'
    },
    {
        id: 4,
        title: 'Kultur Sel Bioproses'
    },
]
