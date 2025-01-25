'use client'


import { tittleFont } from "@/app/config/fonts";
import { useUIStore } from "@/app/store";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";


export const TopMenu = () =>{

    const openMenu = useUIStore(state => state.openSideMenu);

    return(
        /* Logo*/
        <nav className="relative z-10 flex px-5 justify-between items-center w-full bg-gray-300 shadow rounded-lg">
            <div>
                <Link href="/app">
                    <span className={`${tittleFont.className} antialiased font-bold`}>Residencia Cotoperi</span>
                    <span > | Sistema de administracion</span>
                </Link>
            </div>

            {/*center menu */}

            <div className="hidden sm:block">

                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/app/Propietarios">Propietarios</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/app/Apartamentos">Apartamentos</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/app/pagos">Pagos</Link>

            </div>
            <div className="flex items-center">

                <Link href="/search" className="mx-2">
                <IoSearchOutline className="w-5 h-5"/>
                </Link>

                <button
                onClick={openMenu}
                className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
                Menu
                </button>
            </div>
        </nav>
        
    );
}