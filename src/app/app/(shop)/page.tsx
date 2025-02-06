
import { Title } from "@/app/components";
import { ListUsuarios } from "@/app/components/dashboard/listusuarios";
import { PagosRecientes } from "@/app/components/dashboard/pagosrecientes";
import { Solvente } from "@/app/components/dashboard/solvente";

export default  function Home() {
  
  return (
    <div>
      <Title
        title="Bienvenido"
        subtitle="Disfruta tu experiencia"
        className="bg-white shadow px-6 py-1 text-3xl font-bold tracking-tight text-gray-900"
      />

      <div className="flex flex-row justify-items-center px-20 py-2 gap-14 m-4"> 
        
        <div className="p-4 bg-slate-300 w-80 h-96 rounded-md">
          <h2 className="text-center"><strong>Propietarios</strong></h2>
          <ListUsuarios/>

        </div>
        
        <div className="p-4 bg-slate-300 w-80 h-96 rounded-md"> 
          <h2 className="text-center"> <strong>Pagos recientes</strong></h2>
          <PagosRecientes/>
        </div>

        <div className="px-2 py-10 bg-slate-300 rounded-md w-5/12 h-96"> 
          
          <h2 className="text-center"><strong>Lista de apartamentos solventes</strong></h2>
          <Solvente/>
        
        </div>
        
      </div>
  
    
    </div>
  );
}
