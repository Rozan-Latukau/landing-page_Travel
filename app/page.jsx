import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="mx-6 lg:mx-20 pt-20">
            <div className="pb-10 relative ">
                <Image src="/assets/landingpage.jpg" alt="Logo" width={200} height={200} className="rounded-lg w-full h-[25rem] md:h-[35rem] object-cover opacity-80 " />
                <div className="absolute inset-0 flex flex-col items-start justify-center  p-6 md:p-10">
                    <h1 className="text-[25px] md:text-[40px] pb-6 font-bold text-white">Selamat Datang Di, Travel <br />Indonesia</h1>
                    <Button className="px-20 bg-transparent text-white" variant="outline">Lihat</Button>
                </div>
            </div>
            <div className="pt-20">
                <div>
                    <h1 className="text-[25px] md:text-[30px] text-center font-bold">Benefits</h1>
                </div>
                <div className="grid md:grid-flow-col grid-cols-2 md:grid-cols-4 text-center pt-12 gap-6">
                    <div>
                        <h3 className="font-bold text-[20px] pb-2">Airport</h3>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-[20px] pb-2">Airport</h3>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-[20px] pb-2">Airport</h3>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-[20px] pb-2">Airport</h3>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div className="pt-20">
                <div className="flex items-center justify-between">
                    <h1 className="text-[25px] md:text-[30px] text-start font-bold">Pilih tur Anda</h1>
                    <Button variant="link">Lihat Selengkapnya</Button>
                </div>
                <div className="grid md:grid-flow-col grid-cols-2 md:grid-cols-4 text-center pt-12 gap-6">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <Image src="/assets/landingpage.jpg" alt="card-1" width={200} height={200} className="w-full h-48 rounded-md" />
                        </Link>
                        <div class="p-5 flex flex-col text-start justify-start">
                            <Link href="#">
                                <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">Bali</h5>
                            </Link>
                            <p className="text-[16px] font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <Image src="/assets/landingpage.jpg" alt="card-1" width={200} height={200} className="w-full h-48 rounded-md" />
                        </Link>
                        <div class="p-5 flex flex-col text-start justify-start">
                            <Link href="#">
                                <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">Bali</h5>
                            </Link>
                            <p className="text-[16px] font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <Image src="/assets/landingpage.jpg" alt="card-1" width={200} height={200} className="w-full h-48 rounded-md" />
                        </Link>
                        <div class="p-5 flex flex-col text-start justify-start">
                            <Link href="#">
                                <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">Bali</h5>
                            </Link>
                            <p className="text-[16px] font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <Image src="/assets/landingpage.jpg" alt="card-1" width={200} height={200} className="w-full h-48 rounded-md" />
                        </Link>
                        <div class="p-5 flex flex-col text-start justify-start">
                            <Link href="#">
                                <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">Bali</h5>
                            </Link>
                            <p className="text-[16px] font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-20 grid md:grid-flow-col md:grid-cols-2 gap-6 items-center">
                <h1 className="text-[25px] md:text-[30px] text-center md:text-start font-bold">Blog Tentang <br />Travelling</h1>
                <div className="flex flex-col justify-start items-start">
                    <p className="text-[16px] text-gray-600 pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum hendrerit metus id vestibulum. Quisque massa quam, egestas vitae laoreet ut, pulvinar nec neque.
                    </p>
                    <Button variant="outline" className="px-14 rounded-full">Lihat Selengkapnya</Button>
                </div>
            </div>
            <div className="pt-20 pb-10 relative ">
                <Image src="/assets/landingpage.jpg" alt="Logo" width={200} height={200} className="rounded-lg w-full h-[20rem] object-cover" />
                <div className="absolute inset-0 flex flex-col items-center text-center justify-center  p-10">
                    <h1 className="text-[25px] md:text-[40px] pb-6 font-bold text-white">Maju Bersama, <br /> Travel Indonesia</h1>
                    <Button className="px-20 bg-transparent text-white" variant="outline" >Check it Out</Button>
                </div>
            </div>
        </div >
    );
}