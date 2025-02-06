
import { propietarios } from "../../seed/seed";

export function ListUsuarios() {
  return (
    
        <div className="flex flex-col bg-white my-2 rounded-md">
          

          {propietarios.map((propietario) => (
            <div key={propietario.id} className="justify-between my-1.5 px-4 py-2">
              <span>{propietario.nombre}</span>
            </div>
          ))}
      </div>
  )
}
