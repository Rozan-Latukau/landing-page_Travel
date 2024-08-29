"use client";

import { useState, useEffect } from "react"
import Link from "next/link";

const FAQ = [
    {
        judul: "Apa itu Forwardin?",
        jawab: "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google."
    },
    {
        judul: "Apakah Forwardin cocok untuk saya?",
        jawab: "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google."
    },
    {
        judul: "Apakah Forwardin perlu di-install ke komputer?",
        jawab: "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google."
    },

]


const Footer = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {

    }, []);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#ff7e33f1] md:py-20 py-14">
            <div className="mx-8 md:mx-14">
                <div className="ml-0 lg:ml-40">
                    <div className="grid md:grid-flow-row md:grid-cols-3 gap-8 md:gap-20 justify-center" id="contact">
                        <div className="flex flex-col">
                            <h3 className="text-white text-lg font-semibold">Tentang Kami</h3>
                            <p className="text-white pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum hendrerit metus id vestibulum. Quisque massa quam, egestas vitae laoreet ut, pulvinar nec neque. </p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-white text-lg font-semibold">Kontak Kami</h3>
                            <p className="text-white pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum hendrerit metus id vestibulum</p>
                            <Link href="/" className="text-white pt-4">Email: anonymus@fowarin</Link>
                            <Link href="/" className="text-white pt-4">Phone: 08332132739</Link>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg text-white font-semibold">Media Sosial</h3>
                            <Link href="/" className="text-white pt-4">Facebook</Link>
                            <Link href="/" className="text-white pt-4">Instagram</Link>
                            <Link href="/" className="text-white pt-4">Twitter</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
