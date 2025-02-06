
import { pagos } from "../../seed/seed";

export function PagosRecientes() {

    const generarFecha= ()=> {

        const fecha = new Date(2024, 10,1);
        const fin = new Date();
        const Fecha = new Date(fecha.getTime() + Math.random() * (fin.getTime() - fecha.getTime()));
        return Fecha
    }

    const fechaRamdon= (fecha : Date)=> {
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
        const año = fecha.getFullYear();
        return `${dia}/${mes}/${año}`;
    }
    const fechaAleatoria = generarFecha()
    const randomFecha = fechaRamdon(fechaAleatoria)

  return (
    <div>
      
      <div className="flex flex-col bg-white my-2 rounded-md">
         
         {pagos.map(pago=>(

            <div key={pago.id} className="justify-between px-4 py-0.5">                
             <span>{`pago realizado de ${pago.monto} bs ${randomFecha}`}</span>   
            </div>
         ))}

      </div>
    </div>
  )
}
