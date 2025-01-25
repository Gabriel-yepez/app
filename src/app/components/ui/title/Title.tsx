import { tittleFont } from "@/app/config/fonts";

interface Props{

    title: string;
    subtitle?: string;
    className?: string;
}
export const Title=({title,subtitle,className} : Props)=>{

    return(
        <div className={`${className}`}> 
            <h1 className={`${tittleFont.className} antialiased text-4xl font-semibold my-4`}>{title}</h1>
            <h1  className="text-xl mb-5">
                 {subtitle}            
            </h1>
        </div> );
}