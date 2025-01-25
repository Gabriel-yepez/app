import { Sidebar, TopMenu } from "@/app/components";

export default function Shoplayout({
    children
}:{
    children: React.ReactNode;
}){
    return (
    <main className="min-h-screen">
    
    <TopMenu />
    <Sidebar/>

    <div className="px-0">
        {children}
    </div>
    
    
    </main>
    )
}