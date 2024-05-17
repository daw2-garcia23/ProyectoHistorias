import { useContext } from "react";
import { DataContext } from "./GlobalContext";
import { Carta } from "./Card";


export function Cartas(){
    const { data } = useContext(DataContext);
    console.log('data',data)
    return (
        <div>
          <h1>Datos importados</h1>
          <div className="flex">
          {data.map((item) => (
            <Carta 
            key={item.id}
            titulo={item.titulo}
            fecha={item.fecha}
            experiencia={item.experiencia}
            imagen={item.imagen}
            />
          ))}

          </div>

          <div className="bg-success w-[50px] h-[50px] rounded-full fixed bottom-5 right-5">
            <div className="bg-success w-[50px] h-[50px] rounded-full fixed bottom-5 right-5">
            +
            </div>
            
          </div>
        
        </div>
      );
}