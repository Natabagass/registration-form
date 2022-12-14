import { BsPeopleFill, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { FaRegSadTear, FaRegGrinHearts, FaRegSmileBeam, FaRegMeh, FaRegTired, FaSadTear } from "react-icons/fa"
import React from 'react'


export const jam = [
    {
        id: 'pertama',
        label: '08.00 - 10.00',
    },
    {
        id: 'kedua',
        label: '10.00 - 12.00',
    },
    {
        id: 'ketiga',
        label: '12.00 - 16.00',
    },
    {
        id: 'keempat',
        label: '16.00 - 18.00',
    },
    {
        id: 'kelima',
        label: '19.00 - 21.00',
    },
    {
        id: 'keenam',
        label: '21.00 - 23.00',
    }
]

export const studi = [
    {
        label: "S1 Teknik Kimia",
        id: "s1kimia"
    },
    {
        label: "S1 Teknologi Bioproses",
        id: "bioproses"
    },
    {
        label: "S2 Teknik Kimia",
        id: "s2kimia"
    },
    {
        label: "S3 Teknik Kimia",
        id: "s3kimia"
    },
]

export const rating = [
    {
        id: 'sulitBanget',
        label: 'Sulit Banget',
        icon: <FaRegTired/>
    },
    {
        id: 'agakBanget',
        label: 'Agak Sulit',
        icon: <FaRegSadTear/>
    },
    {
        id: 'lumayan',
        label: 'Lumayan',
        icon: <FaRegMeh/>
    },
    {
        id: 'mudah',
        label: 'Mudah',
        icon: <FaRegSmileBeam/>
    },
    {
        id: 'mudahBanget',
        label: 'Mudah Banget',
        icon: <FaRegGrinHearts/>
    }
]

export const univ = [
    {
        label: "Universitas Indonesia",
        id: "ui"
    },
    {
        label: "Institut Teknologi Bandung",
        id: "itb"
    },
    {
        label: "Institut Teknologi Sepuluh November",
        id: "its"
    },        
    {
        label: "Universitas Sriwijaya",
        id: "unsri"
    },        
    {
        label: "Universitas Muhammadiyah Surakarta",
        id: "ums"
    },
]

export const sosmed = [
    {
        label: "Instagram",
        id: "ig"
    },
    {
        label: "Facebook",
        id: "fb"
    },
    {
        label: "Tiktok",
        id: "tt"
    },        
    {
        label: "Linkedin",
        id: "linkedin"
    },        
    {
        label: "Line",
        id: "line"
    },
    {
        label: "Teman atau Keluarga",
        id: "teman"
    },
]

export const kelasKonsultasi = [
    {
        icon: <AiFillCheckCircle />,
        text:'Live Tutoring di Google Meet (100 menit/sesi)'
    },
    {
        icon: <AiFillCheckCircle />,
        text:<h1><span className="font-bold">1 Sesi </span>sama dengan <span className="font-bold">2 Materi</span></h1>
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

export const kelasPersiapanUjian = [
    {
        icon: <AiFillCheckCircle />,
        text:'Live Tutoring di Google Meet (100 menit/sesi)'
    },
    {
        icon: <AiFillCheckCircle />,
        text:<h1><span className="font-bold">1 Sesi </span>sama dengan <span className="font-bold">2 Materi</span></h1>
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

export const kelasPerkuliahan = [
    {
        icon: <AiFillCheckCircle />,
        text:'Live Tutoring di Google Meet (100 menit/sesi)'
    },
    {
        icon: <AiFillCheckCircle />,
        text:<h1><span className="font-bold">1 Sesi </span>sama dengan <span className="font-bold">1 Materi</span></h1>
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


export const kelas = [
    {
        id: 'kelasPerkuliahan',
        id2: 'kelasPerkul',
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
                text:<h1><span className="font-bold">1 Sesi </span>sama dengan <span className="font-bold">1 Materi</span></h1>
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
        id: 'kelasKonsultasi',
        id2: 'kelasKonsul',
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
                text:<h1><span className="font-bold">1 Sesi </span>sama dengan <span className="font-bold">2 Materi</span></h1>
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
        id: 'kelasPersiapanUjian',
        id2: 'kelasPerUjian',
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
                text:<h1><span className="font-bold">1 Sesi </span>sama dengan <span className="font-bold">2 Materi</span></h1>
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
        id: '1',
        id2: 'matkul1',
        title: 'Dasar-Dasar Kimia Analitik',
        jumlah: 'Tersedia 4 materi',
        matpel:[
            {
                desc: 'Materi 1',
                id: 'Materi1'
            },
            {
                desc: 'Materi 2',
                id: 'Materi2'
            },
            {
                desc: 'Materi 3',
                id: 'Materi3'
            },
            {
                desc: 'Materi 4',
                id: 'Materi4'
            }
        ]
    },
    {
        id: '2',
        id2: 'matkul2',
        title: 'Dasar-Dasar Perpindahan Massa',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '3',
        id2: 'matkul3',
        title: 'Dasar-Dasar Perpindahan Panas',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '4',
        id2: 'matkul4',
        title: 'Desain Pabrik Proses',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '5',
        id2: 'matkul5',
        title: 'Desain Peralatan Proses',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '6',
        id2: 'matkul6',
        title: 'Desain Produk dan Pengembangan',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '7',
        id2: 'matkul7',
        title: 'Ekonomi Teknik',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '8',
        id2: 'matkul8',
        title: 'Fenomena Transportasi',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '9',
        id2: 'matkul9',
        title: 'Fisika Dasar 1',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '10',
        id2: 'matkul10',
        title: 'Fisika Dasar 2',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '11',
        id2: 'matkul11',
        title: 'Kalkulus Dasar',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '12',
        id2: 'matkul12',
        title: 'Kimia Dasar',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '13',
        id2: 'matkul13',
        title: 'Kimia Fisik',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '14',
        id2: 'matkul14',
        title: 'Kimia Organik Untuk Teknik',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '15',
        id2: 'matkul15',
        title: 'Komputasi Numerik Untuk Teknik',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '16',
        id2: 'matkul16',
        title: 'Kultur Sel Untuk Teknik',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '17',
        id2: 'matkul17',
        title: 'Matematika Teknik Kimia',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '18',
        id2: 'matkul18',
        title: 'Mekanika Fluida dan Partikel',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '19',
        id2: 'matkul19',
        title: 'Neraca Massa dan Energi',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '20',
        id2: 'matkul20',
        title: 'Proses Kontrol dan Dinamika',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '21',
        id2: 'matkul21',
        title: 'Simulasi Proses Kimia',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '22',
        id2: 'matkul22',
        title: 'Statistik dan Probalitas',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '23',
        id2: 'matkul23',
        title: 'Teknik Reaksi Kimia',
        jumlah: 'Tersedia 4 materi'
    },
    {
        id: '24',
        id2: 'matkul24',
        title: 'Termodinamika Teknik Kimia',
        jumlah: 'Tersedia 4 materi'
    }
]

