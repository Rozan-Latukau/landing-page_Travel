import Navbar from "@/components/Header/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from "@/components/ui/sheet";


const Header = () => {
    return (
        <>
            <div className="">
                <div className="py-0 xl:py-8">
                    <div className="lg:container w-full mx-auto flex justify-center">
                        <div className="shadow-lg bg-white rounded-md shadow-gray-100 w-full lg:w-auto fixed z-50 flex lg:inline-flex lg:justify-center justify-between items-center gap-16 p-4">
                            <div className="xl:flex hidden items-center gap-8 ">
                                <Navbar />
                                <Link href="/Auth/signin">
                                    <Button>Sign In</Button>
                                </Link>
                            </div>

                            {/* Navbar Mobile */}
                            <div className="xl:hidden">
                                <Sheet>
                                    <SheetTrigger>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
                                            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
                                        </svg>
                                    </SheetTrigger>
                                    <SheetContent side="top">
                                        <SheetHeader >
                                            <Navbar />
                                            <div className="flex flex-col pt-4 gap-4">
                                                <Link href="/Auth/signin">
                                                    <Button className="w-full">Log In</Button>
                                                </Link>
                                            </div>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
