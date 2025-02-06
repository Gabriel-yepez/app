
import { apartamentos } from "../../seed/seed";
export  function Solvente() {
  return (
    <div>
      <div className="flex flex-col  bg-white my-2 rounded-md px-4">

        {apartamentos.map(apart=>(

            <ul>
                <li key={apart.id} className="justify-between px-4 py-3">
                   {` ${apart.numero_apartamento} estan solventes`}
                </li>
            </ul>
        ))}
      </div>
    </div>
  )
}
