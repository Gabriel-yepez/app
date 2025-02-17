import { tittleFont } from "@/app/config/fonts"
import Link from "next/link"
import Image from "next/image"

export const Pagenotfound = ()=>{

    return (
        <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
            <div className="text-center px-5 mx-5 ">
                <h2 className={`${tittleFont.className} antialiased tex-9xl`}>404</h2>
                <p className="font-semibold text-xl">Whoops! Lo sentimos mucho.</p>
                <p className="font-light">
                    <span>Puedes regresar al </span>
                    <Link href='/app' className="font-normal hover:underline transition-all">inicio</Link>
                </p>
            </div>


            <div className="px-5 mx-5">


                <Image src="/imgs/car.png" 
                alt="Starman"
                className="p-5 sm:p-0"
                width={550}
                height={550}
                />
            </div>

        </div>
    )
}